import { WebView } from "react-native-webview";
import { View, StyleSheet, Platform } from "react-native";

type Props = {
  base64: string;
  onSyncRequest?: (page: number, x: number, y: number) => void;
};

export default function PdfViewer({ base64, onSyncRequest }: Props) {
  const html = `
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
    <style>
        body { margin: 0; padding: 0; background-color: #f0f0f0; display: flex; flex-direction: column; align-items: center; }
        canvas { max-width: 100%; height: auto; margin-bottom: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); cursor:pointer}
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
            (function(currentPage){
                pdf.getPage(currentPage).then(function(page) {
                    var scale = 2.0;  
                    var viewport = page.getViewport({scale: scale});
                    
                    var canvas = document.createElement('canvas');
                    var context = canvas.getContext('2d');
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;

                    canvas.dataset.pageNumber = currentPage;
                    canvas.dataset.pdfWidth = viewport.width;
                    canvas.dataset.pdfHeight = viewport.height;
                    
                    container.appendChild(canvas);
                    
                    var renderContext = {
                        canvasContext: context,
                        viewport: viewport
                    };
                    page.render(renderContext);


                    canvas.addEventListener('click', function(e){
                     var rect = canvas.getBoundingClientRect();
                     var scaleX = canvas.width / rect.width;
                     var scaleY = canvas.height / rect.height;

                     var clickX = (e.clientX - rect.left) * scaleX;
                     var clickY = (e.clientY - rect.top) * scaleY;

                     var pdfX = clickX;
                     var pdfY = viewport.height - clickY;

                     if(window.ReactNativeWebView){
                     var msg = JSON.stringify({
                     page: currentPage,
                     x:pdfX,
                     y:pdfY});
                     window.ReactNativeWebView.postMessage(msg);
                     }
                    });
                });
            })(pageNum);

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
        onMessage={(event) => {
          if (onSyncRequest) {
            try {
              const data = JSON.parse(event.nativeEvent.data);
              onSyncRequest(data.page, data.x, data.y);
            } catch (error) {
              console.error("Error parsing synctex error", error);
            }
          }
        }}
      />
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
