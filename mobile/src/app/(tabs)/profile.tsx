import { View, Text, Pressable } from "react-native";
import { useTheme } from "@/context/ThemeContext";
import { useRouter } from "expo-router";
import { use, useEffect, useState } from "react";
import { API_URL } from "@/contants/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Profile() {
  const { theme } = useTheme();
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user_id = await AsyncStorage.getItem("user_id");
      if (user_id) {
        const response = await fetch(`${API_URL}/auth/users/${user_id}`);
        const data = await response.json();
        setUser(data);
      }
    };
    fetchUser();
  }, []);

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

        <Pressable
          className="mt-auto mb-10 py-4 items-center shadow-sm rounded-full active:opacity-80"
          style={{ backgroundColor: theme.danger }}
          onPress={() => router.replace("/auth/sign-in")}
        >
          <Text className="text-xl font-semibold" style={{ color: "#FFFFFF" }}>
            Logout
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
