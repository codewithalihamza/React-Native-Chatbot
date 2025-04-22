import AsyncStorage from "@react-native-async-storage/async-storage";

export const getSessionId = async (): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem("sessionId");
  } catch (error) {
    console.error("Error getting sessionId:", error);
    return null;
  }
};

export const setSessionId = async (sessionId: string): Promise<void> => {
  try {
    await AsyncStorage.setItem("sessionId", sessionId);
  } catch (error) {
    console.error("Error setting sessionId:", error);
  }
};
