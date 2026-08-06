import { useRouter } from "expo-router";
import { View, Pressable, Text, TextInput } from "react-native";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { saveToken } from "@/utils/auth";

export default function SignIn() {
  const router = useRouter();
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      const response = await fetch("http://192.168.100.4:8000/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data = await response.json();

      if (response.ok) {
        saveToken(data.token);
        router.replace("/(tabs)");
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Something went wrong!Please try again later.");
    }
  };

  return (
    <View
      className="flex-1 w-full gap-4 mt-8 px-6 items-center justify-center"
      style={{ backgroundColor: theme.background }}
    >
      <Text style={{ color: theme.text }} className="text-3xl font-bold">
        Sign In
      </Text>

      <View className="w-full flex flex-col items-center justify-center gap-2">
        <TextInput
          placeholder="Email"
          placeholderTextColor={theme.textSecondary}
          value={email}
          onChangeText={setEmail}
          className="w-full px-5 py-4 mb-4 rounded-xl text-lg"
          style={{
            backgroundColor: theme.surface,
            color: theme.text,
          }}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor={theme.textSecondary}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          className="w-full px-5 py-4 mb-4 rounded-xl text-lg"
          style={{
            backgroundColor: theme.surface,
            color: theme.text,
          }}
        />

        <Pressable
          className="w-full py-4 rounded-full items-center"
          style={{ backgroundColor: theme.accent }}
          onPress={() => handleSignIn()}
        >
          <Text
            style={{ color: theme.accentText }}
            className="text-xl font-bold"
          >
            Login
          </Text>
        </Pressable>

        <View className="flex-row items-center gap-2 mt-2">
          <Text style={{ color: theme.textSecondary }}>
            Don't have an account?
          </Text>
          <Pressable onPress={() => router.replace("/auth/sign-up")}>
            <Text
              className="underline font-bold"
              style={{ color: theme.accent }}
            >
              Sign Up
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
