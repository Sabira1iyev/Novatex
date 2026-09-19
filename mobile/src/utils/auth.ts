import * as SecureStore from "expo-secure-store";
 
export const saveToken = async (token: string) => {
  try {
    await SecureStore.setItemAsync("userToken", token);
  } catch (error) {
    console.log("Error saving token", error);
  }
};

export const getToken = async () => {
  try {
    return await SecureStore.getItemAsync("userToken");
  } catch (error) {
    console.log("Error getting token", error);
    return null;
  }
};

export const setUserId = async(userId: string) => {
  await SecureStore.setItemAsync("user_id", userId);
}

export const getUserId = async() => {
  return await SecureStore.getItemAsync("user_id");
}

export const clearAuth = async () => {
  await SecureStore.deleteItemAsync("userToken");
  await SecureStore.deleteItemAsync("user_id");
}