import { WebView } from "react-native-webview";
import { View, StyleSheet, Platform } from "react-native";

type Props = {
  base64: string;
};

export default function PdfViewer({ base64 }: Props) {
  if (Platform.OS === "android") {
    const html = `
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
    <style>
        body { margin: 0; padding: 0; background-color: #f0f0f0; display: flex; flex-direction: column; align-items: center; }
        canvas { max-width: 100%; height: auto; margin-bottom: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    </style>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js"></script>
</head>
<body>
    <div id="pdf-container"></div>
    <script>
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';
        
        var pdfData = atob('${base64}');
        var uint8Array = new Uint8Array(pdfData.length);
        for (var i = 0; i < pdfData.length; i++) {
            uint8Array[i] = pdfData.charCodeAt(i);
        }

        var loadingTask = pdfjsLib.getDocument({data: uint8Array});
        loadingTask.promise.then(function(pdf) {
            var container = document.getElementById('pdf-container');
            
            for (var pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                pdf.getPage(pageNum).then(function(page) {
                    var scale = 2.0; // Higher scale for better text quality
                    var viewport = page.getViewport({scale: scale});
                    
                    var canvas = document.createElement('canvas');
                    var context = canvas.getContext('2d');
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;
                    
                    container.appendChild(canvas);
                    
                    var renderContext = {
                        canvasContext: context,
                        viewport: viewport
                    };
                    page.render(renderContext);
                });
            }
        }).catch(function(reason) {
            console.error(reason);
        });
    </script>
</body>
</html>
`;
    return (
      <View style={styles.container}>
        <WebView 
          source={{ html }} 
          style={styles.webview} 
          originWhitelist={["*"]} 
          scalesPageToFit={true}
        />
      </View>
    );
  }


  const source = { uri: `data:application/pdf;base64,${base64}` };
  return (
    <View style={styles.container}>
      <WebView source={source} style={styles.webview} originWhitelist={["*"]} />
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
