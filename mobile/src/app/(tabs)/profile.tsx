import { View, Text, Pressable, ScrollView } from "react-native";
import { useTheme } from "@/context/ThemeContext";
import { useRouter } from "expo-router";
import { use, useEffect, useState } from "react";
import { API_URL } from "@/contants/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Profile() {
  const { theme } = useTheme();
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [files, setFiles] = useState<any[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
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
      const fileResponse = await fetch(`${API_URL}/files`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const filesData = await fileResponse.json();
      setFiles(filesData);
    };
    fetchUser();
  }, []);

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
              >
                <View className="">
                  <View
                    className="w-10 h-10 rounded-full items-center justify-center mb-3 border-[1px]"
                    style={{
                      backgroundColor: theme.surface,
                      borderColor: theme.border,
                    }}
                  >
                    <Text className="text-xl">📄</Text>
                  </View>
                  <Text
                    style={{
                      color: theme.text,
                    }}
                    className="text-base"
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
