import WebView from "react-native-webview";
import { View, StyleSheet } from "react-native";
import { useEffect, useRef, useMemo, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

type Props = {
  initialValue: string;
  onChange: (text: string) => void;
  highlightLine?: number | null;
};

export default function CodeEditor({
  initialValue,
  onChange,
  highlightLine,
}: Props) {
  const WebViewRef = useRef<WebView>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { isDark, theme } = useTheme();
  const lastPushedValue = useRef(initialValue);

  useEffect(() => {
    const themeName = isDark ? "dracula" : "default";
    const bgColor = isDark ? "#282a36" : "#ffffff";
    const js = `
      document.body.style.backgroundColor = "${bgColor}";
      if (typeof editor !== 'undefined') {
        editor.setOption("theme", "${themeName}");
      }
      true;
    `;
    WebViewRef.current?.injectJavaScript(js);
  }, [isDark]);

  useEffect(() => {
    if (isLoaded && initialValue !== lastPushedValue.current) {
      lastPushedValue.current = initialValue;
      const js = `
       if(typeof editor !== 'undefined'){
       if(editor.getValue() !== ${JSON.stringify(initialValue)}){
       editor.setValue(${JSON.stringify(initialValue)});
       }
       }
       true;
       `;
      WebViewRef.current?.injectJavaScript(js);
    }
  }, [initialValue, isLoaded]);

  useEffect(() => {
    if (highlightLine == null) return;
    const lineIndex = highlightLine - 1;
    const js = `
    document.querySelectorAll('.highlighted-line').forEach(el => el.classList.remove('highlighted-line'));
    editor.addLineClass(${lineIndex}, 'background', 'highlighted-line');
    editor.setCursor({
    line: ${lineIndex}, ch:0
    })
    editor.scrollIntoView({
    line:${lineIndex}, ch:0}, 150);
    true
    `;
    WebViewRef.current?.injectJavaScript(js);
  }, [highlightLine]);

  const source = useMemo(
    () => ({
      html: `
     <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/theme/dracula.min.css">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/stex/stex.min.js"></script>
      <style>
        html, body { margin: 0; padding: 0; height: 100%; background-color: ${isDark ? "#282a36" : "#ffffff"}; }
        .CodeMirror { height: 100%; font-size: 15px; }
        .highlighted-line{
        background:#ffe08a !important;
        }

        .CodeMirror-scroll, .CodeMirror-sizer, .CodeMirror-lines, .CodeMirror-code, [contenteditable = "true"]{
        min-height: 100% !important;
        }
      </style>
    </head>
    <body>
      <textarea id="editor"></textarea>
      <script>
        document.getElementById("editor").value = ${JSON.stringify(initialValue)};

        const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
          mode: "stex",
          theme: "${isDark ? "dracula" : "default"}",
          lineNumbers: true,
          lineWrapping: true,
          inputStyle: "contenteditable",
          spellcheck:false,
          autocorrect:false,
          autocapitalize:false
        });

        const inputDom = editor.getInputField();

        const handleKey = (e) => {
          const cur = editor.getCursor();
          if (cur.ch === 0 && cur.line > 0) {
            e.preventDefault();
            const prevlen = editor.getLine(cur.line - 1).length;
            editor.replaceRange("", {line: cur.line - 1, ch:prevlen}, {line: cur.line, ch: 0});
          }
        };

        const tryDeleteSelection = (e) => {
            const sel = window.getSelection();
            if (sel && !sel.isCollapsed) {
                e.preventDefault();
                const textLen = editor.getValue().length;
                const selLen = sel.toString().length;
                if (selLen >= textLen) {
                    editor.setValue("");
                } else {
                    document.execCommand("delete"); 
                }
                return true;
            }
            return false;
        };

        inputDom.addEventListener("beforeinput", (e) => {
          if (e.inputType === "deleteContentBackward" || e.inputType === "deleteByCut") {
             if (editor.getValue().length <= 1) {
                 e.preventDefault();
                 editor.setValue("");
                 return;
             }
             if (tryDeleteSelection(e)) return;
             handleKey(e);
          }
        });

        inputDom.addEventListener("keydown", (e) => {
          if (e.key === "Backspace" || e.keyCode === 8) {
             if (editor.getValue().length <= 1) {
                 e.preventDefault();
                 editor.setValue("");
                 return;
             }
             if (tryDeleteSelection(e)) return;
             handleKey(e);
          }
        });
        
        inputDom.addEventListener("touchstart", (e) => {
          e.stopPropagation();
        });
        inputDom.addEventListener("touchend", (e) => {
          e.stopPropagation();
        });

        let timeout;
        editor.on("change", () => {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            window.ReactNativeWebView.postMessage(editor.getValue());
          }, 300);
        });

        ${
          highlightLine != null
            ? `
        setTimeout(() => {
          const lineIndex = ${highlightLine - 1};
          editor.addLineClass(lineIndex, 'background', 'highlighted-line');
          editor.setCursor({line: lineIndex, ch: 0});
          editor.scrollIntoView({line: lineIndex, ch: 0}, 150);
        }, 150);
        `
            : ""
        }
      </script>
    </body>
    </html>
    `,
    }),
    [],
  );

  const handleMessage = (event: any) => {
    const text = event.nativeEvent.data;
    lastPushedValue.current = text;
    onChange(text);
  };

  return (
    <View style={styles.container}>
      <WebView
        keyboardDisplayRequiresUserAction={false}
        ref={WebViewRef}
        originWhitelist={["*"]}
        source={source}
        onLoadEnd={() => {
          setIsLoaded(true);
        }}
        onMessage={handleMessage}
        style={[styles.webview, { backgroundColor: theme.surface }]}
      ></WebView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
