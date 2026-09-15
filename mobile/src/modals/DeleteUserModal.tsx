import { View, Pressable, Text, Modal, StyleSheet } from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { API_URL } from "@/contants/config";
import "../global.css"
import { useTheme } from "@/context/ThemeContext";

interface DeleteUserModalProps {
    onClose: () => void;
    userId: string;
    userToken: string;
    onDeleted: () => void
}

export default function DeleteUserModal({ onClose, userId, userToken, onDeleted }: DeleteUserModalProps) {

    const [isLoading, setIsLoading] = useState(false);
    const { theme, isDark, toggleTheme } = useTheme();

    const handleDeleteUser = async () => {
        if (!userId || !userToken) {
            alert("Session expired, please try again!")
            return;
        };
        setIsLoading(true);
        try {
            const response = await fetch(`${API_URL}/auth/users/${userId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${userToken}`,
                },
            });
            if (response.ok) {
                await AsyncStorage.removeItem("user_id");
                await AsyncStorage.removeItem("userToken");
                onDeleted?.();
            }
            else {
                alert("Something went wrong while deleting account.")
            }
        }
        catch (error: any) {
            alert("Network error: " + error.message)
        }
        finally {
            setIsLoading(false);
        }
    };


    return (
        <Modal transparent visible={true} animationType="fade" onRequestClose={onClose}>
            <View className="h-full w-full animate-backdrop z-[100] flex items-center justify-center">
                <View className="animate-modal border border-gray-400 w-[90%] max-w-md p-6 rounded-3xl shadow-2xl relative flex flex-col gap-5"
                    style={{
                        backgroundColor: theme.background,
                        borderColor: theme.border
                    }}
                >
                    <View className="flex flex-col items-center text-center gap-4 py-2">
                        <Text className="text-lg font-bold text-[24px]"
                            style={{ color: theme.text }}
                        >
                            Delete Account
                        </Text>
                        <Text className="text-sm pt-2"
                            style={{ color: theme.text }}
                        >
                            Are you sure you want to delete your account?
                        </Text>
                        <View
                            className="flex-row gap-3 w-full items-center justify-center"
                        >
                            <Pressable className="flex-1 py-2.5 rounded-xl text-sm font-semibold items-center justify-center"
                                style={{
                                    backgroundColor: theme.surface
                                }}
                                onPress={() => onClose()}>
                                <Text className="text-sm text-center"
                                    style={{
                                        color: theme.text,
                                    }}
                                >
                                    Cancel
                                </Text>
                            </Pressable>
                            <Pressable className="flex-1 py-2.5 rounded-xl text-sm font-semibold justify-center"
                                onPress={() => handleDeleteUser()}
                                disabled={isLoading}
                                style={{
                                    backgroundColor: theme.danger
                                }}
                            >
                                <Text className="text-sm text-center"
                                    style={{ color: "#ffffff" }}
                                >
                                    {isLoading ? "Deleting..." : "Yes, delete"}
                                </Text>
                            </Pressable>
                        </View>
                    </View>

                </View>
            </View>
        </Modal>
    )
}

