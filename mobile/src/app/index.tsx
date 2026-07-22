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

export default function Index() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [pdfBase64, setPdfBase64] = useState<string | null>(null);
  const [jobId, setJobId] = useState<string | null>(null);
  const inputRef = useRef<TextInput>(null);


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

  const handleSyncRequest = async (page: number, x:number, y:number) => {
    console.log(`[SYNC] Tapped PDF! Page: ${page}, X: ${x}, Y: ${y}`);
    if(!jobId) {
      console.log("[SYNC] Error: No jobId saved in state!");
      return;
    }

    const result = await syncTex(jobId, page, x, y);
    console.log("[SYNC] Backend result:", result);

    if(result.success && result.line){
      setPdfBase64(null);

      setTimeout(() => {
        if(inputRef.current){
          inputRef.current.focus();
        }
      }, 100);
    }
    else{
      console.log("Line number not found.");
    }
  }

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
        <PdfViewer base64={pdfBase64} onSyncRequest={handleSyncRequest}/>
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
          <ScrollView style={styles.editor}>
            <TextInput
            ref={inputRef}
              multiline
              value={code}
              onChangeText={setCode}
              scrollEnabled={false}
            />
          </ScrollView>

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
    paddingHorizontal: 16,
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
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 3,
    fontFamily: "monospace",
    fontSize: 14,
    textAlignVertical: "top",
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
