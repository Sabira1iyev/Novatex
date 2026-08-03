import { Redirect } from "expo-router";
import { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { getToken } from "@/utils/auth";

export default function Index() {
  const [isChecking, setIsChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const token = await getToken();

      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };
    setIsChecking(false);
  }, []);

  if (isChecking) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#090a0f",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="#00E5FF" />
        <Text style={{ color: "#8892B0", marginTop: 10 }}>Loading...</Text>
      </View>
    );
  }

  if (isLoggedIn) {
    return <Redirect href="/(tabs)" />;
  }

  return <Redirect href="/auth/sign-in" />;
}
