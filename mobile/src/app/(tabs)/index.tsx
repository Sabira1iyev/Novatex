import { View, Text, Pressable } from "react-native";
import { useTheme } from "@/context/ThemeContext";
import { useRouter } from "expo-router";

export default function Home() {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <View
      className="flex-1 items-center justify-center px-6"
      style={{ backgroundColor: theme.background }}
    >
      <Text
        style={{ color: theme.text }}
        className="text-4xl font-bold text-center mb-2"
      >
        Welcom to Novatex
      </Text>

      <Text
        style={{ color: theme.textSecondary }}
        className="text-lg text-center mb-8"
      >
        The ultomate LaTeX editor on your pocket
      </Text>
      <Pressable
        className="w-full py-4 rounded-full items-center shadow-sm active:opacity-80"
        style={{ backgroundColor: theme.accent }}
        onPress={() => router.push("/(tabs)/editor")}
      >
        <Text style={{ color: theme.accentText }} className="text-xl font-bold">
          Start Writing
        </Text>
      </Pressable>
    </View>
  );
}
