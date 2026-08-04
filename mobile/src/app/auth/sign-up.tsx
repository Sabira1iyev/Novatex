import { View, Text, TextInput, Pressable } from "react-native";
import { useState, useEffect, use } from "react";
import { useTheme } from "@/context/ThemeContext";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

export default function SignUp() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme();

  return (
    <View
      className="flex-1 w-full gap-4 my-8 px-6 items-center justify-center"
      style={{ backgroundColor: theme.background }}
    >
      <Text style={{ color: theme.text }} className="text-3xl font-bold">
        Sign Up
      </Text>

      <View className="w-full flex flex-col items-center justify-center">
        <View className=" w-full flex-row items-center justify-center gap-2">
          <View className="flex-1 flex flex-col gap-1 items-start justify-center">
            <Text style={{ color: theme.text }}>Firstname</Text>
            <TextInput
              placeholder="Name"
              placeholderTextColor={theme.textSecondary}
              value={firstname}
              onChangeText={setFirstname}
              className="w-full px-5 py-4 mb-4 rounded-xl tex-lg"
              style={{ backgroundColor: theme.surface, color: theme.text }}
            />
          </View>

          <View className="flex-1 flex flex-col gap-1 items-left justify-center">
            <Text style={{ color: theme.text }}>Lastname</Text>
            <TextInput
              placeholder="Lastname"
              placeholderTextColor={theme.textSecondary}
              value={lastname}
              onChangeText={setLastname}
              className="w-full px-5 py-4 mb-4 rounded-xl tex-lg"
              style={{ backgroundColor: theme.surface, color: theme.text }}
            />
          </View>
        </View>
        <View className="w-full flex flex-col justify-center items-start gap-1">
          <Text style={{ color: theme.text }}>Email</Text>
          <TextInput
            placeholder="example@gmail.com"
            placeholderTextColor={theme.textSecondary}
            value={email}
            onChangeText={setEmail}
            className="w-full px-5 py-4 mb-4 rounded-xl text-lg"
            style={{ backgroundColor: theme.surface, color: theme.text }}
          />
        </View>

        <View className="w-full flex flex-col justify-center items-start gap-1">
          <Text style={{ color: theme.text }}>Password</Text>
          <View
            className="w-full flex-row items-center rounded-xl px-5 mb-4"
            style={{ backgroundColor: theme.surface }}
          >
            <TextInput
              placeholder="At least 8 characters"
              secureTextEntry={!showPassword}
              placeholderTextColor={theme.textSecondary}
              value={password}
              onChangeText={setPassword}
              className="flex-1 py-4 text-lg"
              style={{ backgroundColor: theme.surface, color: theme.text }}
            />
            {showPassword ? (
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                <FontAwesome name="eye" size={24} color={theme.textSecondary} />
              </Pressable>
            ) : (
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                <FontAwesome
                  name="eye-slash"
                  size={24}
                  color={theme.textSecondary}
                />
              </Pressable>
            )}
          </View>
        </View>

        <View className="w-full flex flex-col justify-center items-start gap-1">
          <Text style={{ color: theme.text }}>Confirm Password</Text>
          <View
            className="w-full flex-row items-center rounded-xl px-5 mb-4"
            style={{ backgroundColor: theme.surface }}
          >
            <TextInput
              placeholder="Re-type password"
              secureTextEntry={!showConfirmPassword}
              placeholderTextColor={theme.textSecondary}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              className="flex-1 py-4 text-lg"
              style={{ backgroundColor: theme.surface, color: theme.text }}
            />
            {showConfirmPassword ? (
              <Pressable
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <FontAwesome name="eye" size={24} color={theme.textSecondary} />
              </Pressable>
            ) : (
              <Pressable
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <FontAwesome
                  name="eye-slash"
                  size={24}
                  color={theme.textSecondary}
                />
              </Pressable>
            )}
          </View>
        </View>
      </View>
      <Pressable
        className="w-full py-4 rounded-full items-center"
        style={{ backgroundColor: theme.accent }}
      >
        <Text className="text-xl font-bold" style={{ color: theme.accentText }}>
          Sign Up
        </Text>
      </Pressable>
      <View className="flex-row items-center gap-2">
        <Text style={{ color: theme.textSecondary }}>
          Already have an account?
        </Text>
        <Pressable onPress={() => router.replace("/auth/sign-in")}>
          <Text className="underline font-bold" style={{ color: theme.accent }}>
            Sign In
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
