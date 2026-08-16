import {
  View,
  Text,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useTheme } from "@/context/ThemeContext";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { API_URL } from "@/contants/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome } from "@expo/vector-icons";
import { compileLatex } from "@/services/api";
import PdfViewer from "@/components/PdfViewer";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Profile() {
  const { theme } = useTheme();
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [files, setFiles] = useState<any[]>([]);
  const [pdfBase64, setPdfBase64] = useState<string | null>(null);
  const [isPdfVisible, setIsPdfVisible] = useState(false);
  const [loadingPdf, setLoadingPdf] = useState<number | null>(null);

  const handleViewPdf = async (file: any) => {
    setLoadingPdf(file.id);
    try {
      const result = await compileLatex(file.content);
      if (result.success) {
        setPdfBase64(result.pdf_base64);
        setIsPdfVisible(true);
      } else {
        alert("Error compiling pdf");
      }
    } catch (err) {
      alert("error:" + err);
    }
    setLoadingPdf(null);
  };

  const handleDeleteUser = async () => {
    const user_id = await AsyncStorage.getItem("user_id");
    const token = await AsyncStorage.getItem("userToken");
    if (user_id && token) {
      const response = await fetch(`${API_URL}/auth/users/${user_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        await AsyncStorage.removeItem("user_id");
        await AsyncStorage.removeItem("userToken");
        router.replace("/auth/sign-in");
      }
    }
  };

  const handleDeleteBook = async (id: number) => {
    const token = await AsyncStorage.getItem("userToken");
    const response = await fetch(`${API_URL}/files/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      alert("Book deleted successfully");
      setFiles(files.filter((f) => f.id !== id));
    }
  };

  useFocusEffect(
    useCallback(() => {
      const fetchUser = async () => {
        try {
          const user_id = await AsyncStorage.getItem("user_id");
          const token = await AsyncStorage.getItem("userToken");

          if (user_id && token) {
            const response = await fetch(`${API_URL}/auth/users/${user_id}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            const data = await response.json();
            setUser(data);
          }

          const fileResponse = await fetch(`${API_URL}/files/`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (fileResponse.ok) {
            const filesData = await fileResponse.json();
            setFiles(Array.isArray(filesData) ? filesData : []);
          } else {
            console.log("Error:", fileResponse.status);
            setFiles([]);
          }
        } catch (e) {
          console.log("Connection error (Crash prevented):", e);
        }
      };
      fetchUser();
    }, []),
  );

  if (isPdfVisible && pdfBase64) {
    return (
      <SafeAreaView
        className="flex-1"
        style={{ backgroundColor: theme.background }}
      >
        <View
          className="flex-row items-center px-4 py-3 border-b"
          style={{ borderColor: theme.border }}
        >
          <Pressable
            onPress={() => setIsPdfVisible(false)}
            className="px-5 py-2 rounded-full border"
            style={{
              backgroundColor: theme.surface,
              borderColor: theme.border,
            }}
          >
            <Text style={{ color: theme.text }} className="font-semibold">
              Back
            </Text>
          </Pressable>
        </View>
        <PdfViewer base64={pdfBase64} onSyncRequest={() => {}} />
      </SafeAreaView>
    );
  }

  return (
    <View
      className="flex-1 px-6 pt-12"
      style={{ backgroundColor: theme.background }}
    >
      <View className="items-center mb-10">
        <View
          className="w-20 h-20 rounded-full mb-1 items-center justify-center"
          style={{
            backgroundColor: theme.surface,
            borderColor: theme.accent,
            borderWidth: 1,
          }}
        >
          <Text className="text-4xl">👤</Text>
        </View>
        <Text style={{ color: theme.text }} className="text-2xl">
          {user?.first_name} {user?.last_name}
        </Text>
        <Text className="text-sm" style={{ color: theme.textSecondary }}>
          {user?.email}
        </Text>
      </View>

      <View className="gap-4">
        <Pressable
          className="flex-row items-center justify-between p-4 rounded-2xl active:opacity-80"
          style={{
            backgroundColor: theme.surface,
          }}
        >
          <Text className="text-lg" style={{ color: theme.text }}>
            Theme Settings
          </Text>
          <Text
            style={{ color: theme.textSecondary }}
            className="text-2xl"
          >{`>`}</Text>
        </Pressable>

        <Pressable
          className="flex-row items-center justify-between p-4 rounded-xl active:opacity-80"
          style={{ backgroundColor: theme.surface }}
        >
          <Text className="text-lg" style={{ color: theme.text }}>
            Editor Preferences
          </Text>
          <Text style={{ color: theme.textSecondary }} className="text-2xl">
            {`>`}
          </Text>
        </Pressable>

        <View className="b-6 mt-2">
          <View className="flex-row items-center mb-3">
            <Text className="text-2xl mr-2">📚</Text>
            <Text
              style={{ color: theme.text }}
              className="text-xl tracking-wide"
            >
              My book shelf
            </Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="pt-2"
          >
            {files.map((file: any) => (
              <Pressable
                key={file.id}
                className="w-36 h-48 p-4 mr-4 rounded-xl justify-between shadow-sm active:opacity-80 border-[1px]"
                style={{
                  backgroundColor: theme.surface,
                  borderColor: theme.border,
                }}
                onPress={async () => {
                  await AsyncStorage.setItem("edit_title", file.title);
                  await AsyncStorage.setItem("edit_code", file.content);
                  router.replace("/editor");
                }}
              >
                <View className="">
                  <View className="flex-row items-center justify-between w-full mb-3">
                    <Pressable
                      onPress={() => handleDeleteBook(file.id)}
                      style={{
                        backgroundColor: theme.surface,
                        borderColor: theme.border,
                        borderWidth: 1,
                      }}
                      className="w-10 h-10 rounded-full flex items-center justify-center shadow-md active:opacity-80"
                    >
                      <Text className="text-2xl">
                        <FontAwesome
                          name="trash"
                          size={18}
                          color={theme.danger}
                        />
                      </Text>
                    </Pressable>
                    {loadingPdf === file.id ? (
                      <ActivityIndicator color={theme.accent} size="small" />
                    ) : (
                      <Pressable
                        onPress={() => handleViewPdf(file)}
                        className="w-10 h-10 rounded-full flex items-center justify-center shadow-md acive:opacity-80"
                        style={{
                          backgroundColor: theme.surface,
                          borderColor: theme.border,
                          borderWidth: 1,
                        }}
                      >
                        <FontAwesome name="eye" size={18} color={theme.text} />
                      </Pressable>
                    )}
                  </View>
                  <Text
                    style={{
                      color: theme.text,
                    }}
                    className="w-full text-base justify-center text-center"
                    numberOfLines={2}
                  >
                    {file.title}
                  </Text>
                </View>
                <Text
                  style={{
                    color: theme.textSecondary,
                  }}
                  className="text-xs font-semibold"
                >
                  {new Date(file.updated_at).toLocaleDateString()}
                </Text>
              </Pressable>
            ))}

            {files.length === 0 && (
              <View
                className="w-36 h-48 p-4 mr-4 rounded-xl items-center justify-center border-2 border-dashed"
                style={{
                  borderColor: theme.border,
                }}
              >
                <Text className="text-6xl mb-2">📁</Text>
                <Text
                  style={{ color: theme.textSecondary }}
                  className="text-xs text-center font-semibold"
                >
                  Your book sheld is empty yet!
                </Text>
              </View>
            )}
          </ScrollView>
        </View>

        <Pressable
          className="mt-auto mb-1 py-4 items-center shadow-sm rounded-full active:opacity-80"
          style={{ backgroundColor: theme.danger }}
          onPress={() => router.replace("/auth/sign-in")}
        >
          <Text className="text-xl font-semibold" style={{ color: "#FFFFFF" }}>
            Logout
          </Text>
        </Pressable>

        <Pressable
          className="mt-auto mb-10 py-4 items-center shadow-sm rounded-full active:opacity-80"
          style={{ backgroundColor: theme.danger }}
          onPress={() => handleDeleteUser()}
        >
          <Text className="text-xl font-semibold" style={{ color: "#FFFFFF" }}>
            Delete account
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
