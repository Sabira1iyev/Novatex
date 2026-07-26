import { useRef, useState } from "react";
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

export default function Index() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [pdfBase64, setPdfBase64] = useState<string | null>(null);
  const [jobId, setJobId] = useState<string | null>(null);
  const [highlightline, setHighlightLine] = useState<number | null>(null);

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
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.pdfHeader}>
          <Pressable
            onPress={() => setPdfBase64(null)}
            style={styles.backButton}
          >
            <Text style={styles.backText}>Back</Text>
          </Pressable>
        </View>
        <PdfViewer base64={pdfBase64} onSyncRequest={handleSyncRequest} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.container}>
          <Text style={styles.label}>NOVATEX</Text>
         <View style={styles.editor}>
         <CodeEditor
         initialValue={code}
         onChange={(text) => {
          setCode(text)
          setHighlightLine(null)
         }}
         highlightLine={highlightline}
         />         
</View>
          <Pressable
            style={[styles.button, loading && styles.buttonDisabled]}
            onPress={handleCompile}
            disabled={loading}
          >
            <Text style={styles.buttonText}>
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
    marginHorizontal:16,
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
