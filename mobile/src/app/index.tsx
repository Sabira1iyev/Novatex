import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Pressable
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { compileLatex } from "@/services/api";
import { saveAndSharePdf } from "@/utils/pdf";

export default function Index() {
  const [code, setCode] = useState(
    "\\documentclass{article}\n\\begin{document}\nSabir Aliyev\n\\end{document}",
  );
  const [loading, setLoading] = useState(false);

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
      await saveAndSharePdf(result.pdf_base64);
      setLoading(false);
    } catch (err: any) {
      Alert.alert("Connection error", err.message);
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        style={{flex: 1}}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      > 
      <View style={styles.container}>
        <Text style={styles.label}>Novatex</Text>
        <TextInput
          multiline
          value={code}
          onChangeText={setCode}
          style={styles.editor}
        />
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
    padding: 10,
    fontFamily: "monospace",
    fontSize: 14,
    textAlignVertical: "top",
    marginBottom: 16,
  },
});
