import { useRef, useState } from "react";
import { dummyCode } from "@/contants/dummyCode";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { compileLatex, syncTex } from "@/services/api";
import PdfViewer from "@/components/PdfViewer";
import CodeEditor from "@/components/CodeEditor";
import { useTheme } from "@/context/ThemeContext";
import "@/global.css";

export default function Index() {
  const [code, setCode] = useState(dummyCode);
  const [loading, setLoading] = useState(false);
  const [pdfBase64, setPdfBase64] = useState<string | null>(null);
  const [jobId, setJobId] = useState<string | null>(null);
  const [highlightline, setHighlightLine] = useState<number | null>(null);
  const { theme, isDark, toggleTheme } = useTheme();

  const handleCompile = async () => {
    setLoading(true);
    try {
      const result = await compileLatex(code);

      if (!result.success) {
        const errorMsg = result.log
          ? result.log.slice(0, 300)
          : JSON.stringify(result);
        Alert.alert("Compile error", errorMsg);
        setLoading(false);
        return;
      }

      setPdfBase64(result.pdf_base64);
      setJobId(result.job_id);
      setLoading(false);
    } catch (err: any) {
      Alert.alert("Connection error", err.message);
      setLoading(false);
    }
  };

  const getLineAge = (text: string, lineNumber: number) => {
    const lines = text.split("\n");
    let start = 0;

    for (let i = 0; i < lineNumber - 1; i++) {
      start += lines[i].length + 1;
    }
    const end = start + (lines[lineNumber - 1]?.length ?? 0);
    return {
      start,
      end,
    };
  };

  const handleSyncRequest = async (page: number, x: number, y: number) => {
    console.log(`[SYNC] Tapped PDF! Page: ${page}, X: ${x}, Y: ${y}`);
    if (!jobId) {
      console.log("[SYNC] Error: No jobId saved in state!");
      return;
    }

    const result = await syncTex(jobId, page, x, y);
    console.log("[SYNC] Backend result:", result);

    if (result.success && result.line) {
      setPdfBase64(null);
      setHighlightLine(result.line);
    } else {
      console.log("Line number not found.");
    }
  };

  if (pdfBase64) {
    return (
      <SafeAreaView 
      className="flex-1"
      style={{backgroundColor:theme.background}}>
        <View
        className="flex-row items-center px-4 py-3 border-b"
        style={{borderColor: theme.border, backgroundColor: theme.background}}>
          <Pressable
          className="px-5 py-2 rounded-full border"
            onPress={() => setPdfBase64(null)}
            style={{backgroundColor: theme.surface, borderColor: theme.border}}
          >
            <Text style={{color: theme.text}}
            className="font-semibold"
            >
              
              Back</Text>
          </Pressable>
        </View>
        <PdfViewer base64={pdfBase64} onSyncRequest={handleSyncRequest} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      className="flex-1"
      style={[styles.safeArea, { backgroundColor: theme.background }]}
    >
      <KeyboardAvoidingView
        className="flex-1"
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View className="flex-1" style={{ backgroundColor: theme.background }}>
          <View className="flex flex-row items-center justify-between px-6 pt-4 pb-2">
            <Text
              style={{ color: theme.text }}
              className="text-2xl font-black tracking-widest pr-2"
            >
              NOVA<Text style={{color: theme.accent}}>TEX</Text>
            </Text>
            <View className="flex-row items-center">
              <Pressable
                onPress={() => {
                  Alert.alert(
                    "Clear All",
                    "Are you sure you want to delete everything?",
                    [
                      { text: "Cancel", style: "cancel" },
                      { text: "Clear", style: "destructive", onPress: () => setCode("") }
                    ]
                  );
                }}
                className="px-3 py-2 rounded-full border shadow-sm flex-row items-center mr-2"
                style={{
                  backgroundColor: theme.surface,
                  borderColor: "#ef4444",
                }}
              >
                <Text style={{ color: "#ef4444" }} className="font-semibold text-sm pr-1">
                  🗑️ Clear
                </Text>
              </Pressable>

              <Pressable
                onPress={toggleTheme}
                className="px-4 py-2 rounded-full border shadow-sm flex-row items-center"
                style={{
                  backgroundColor: theme.surface,
                  borderColor: theme.border,
                }}
              >
                <Text className="mr-2 font-semibold">{isDark ? "☀️" : "🌙"}</Text>
                <Text
                  style={{ color: theme.text }}
                  className="text-sm font-semibold pr2"
                >
                  {isDark ? "Light" : "Dark"}
                </Text>
              </Pressable>
            </View>
          </View>
          <View
            className="flex-1 my-2 overflow-hidden rounded-xl border-[1px]"
            style={{
              borderColor: theme.border,
              backgroundColor: theme.surface,
            }}
          >
            <CodeEditor
              initialValue={code}
              onChange={(text) => {
                setCode(text);
                setHighlightLine(null);
              }}
              highlightLine={highlightline}
            />
          </View>

          <Pressable
            className="mx-3 mb-3 py-4 rounded-2xl items-center justify-center shadow-md active:opacity-80"
            style={{ backgroundColor: loading ? theme.border : theme.accent }}
            onPress={handleCompile}
            disabled={loading}
          >
            <Text
              style={{
                color: loading ? theme.textSecondary : theme.accentText,
              }}
              className="text-xl tracking-wider"
            >
              {loading ? "Compiling" : "Turn To PDF"}
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 0,
    paddingBottom: 24,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  button: {
    borderRadius: 18,
    backgroundColor: "#2196F3",
    padding: 12,
    alignItems: "center",
    marginHorizontal: 16,
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  editor: {
    flex: 1,
    marginBottom: 16,
  },
  pdfHeader: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  backText: {
    color: "#ffffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  backButton: {
    alignSelf: "flex-start",
    backgroundColor: "#2196f3",
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: "center",
    borderRadius: 20,
  },
});
