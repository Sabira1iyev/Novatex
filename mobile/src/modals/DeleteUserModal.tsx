import { View, Pressable, Text, Modal } from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { API_URL } from "@/contants/config";
import "../global.css"

interface DeleteUserModalProps {
    onClose: () => void;
    userId: string;
    userToken: string;
    onDeleted: () => void
}

export default function DeleteUserModal({ onClose, userId, userToken, onDeleted }: DeleteUserModalProps) {

    const [isLoading, setIsLoading] = useState(false);

    const handleDeleteUser = async () => {
        if (userId && userToken) {
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
                router.replace("/auth/sign-in");
            }
            else{
                alert("Something went wrong while deleting account.")
            }
        }
    };


    return (
        <Modal transparent visible={true} animationType="fade">
            <View className="animate-backdrop fixed inset-0 z-[100] flex items-center justify-center">
                <View className="animate-modal border border-gray w-[90%] max-w-md p-6 rounded-3xl shadow-2xl relative flex flex-col gap-5">
                    <View className="flex flex-col items-center text-center gap-4 py-4">
                        <Text className="text-lg font-bold text-[24px]">
                            Log Out
                        </Text>
                        <Text className="text-sm text-white">
                            Are you sure you want to delete your account?
                        </Text>
                        <View
                            className="flex-row gap-3 w-full"
                        >
                            <Pressable className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-blue text-white"
                                onPress={() => onClose()}>
                                <Text className="text-sm text-white">
                                    Cancel
                                </Text>
                            </Pressable>
                            <Pressable className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-red text-white shadow-md shadow-primary/20"
                                onPress={() => handleDeleteUser()}
                                disabled={isLoading}
                            >
                                <Text className="text-sm text-white">
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