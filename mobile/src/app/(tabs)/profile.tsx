import { View, Text } from "react-native";
import { useTheme } from "@/context/ThemeContext";

export default function Profile() {
  const { theme } = useTheme();
  
  return (
    <View className="flex-1 items-center justify-center" style={{ backgroundColor: theme.background }}>
      <Text style={{ color: theme.text }} className="text-2xl font-bold">Profile Screen</Text>
      <Text style={{ color: theme.textSecondary }} className="mt-2 text-base">You can design this screen later.</Text>
    </View>
  );
}
