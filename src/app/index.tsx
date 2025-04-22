import { Button } from "@/components/button";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import "~/global.css";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center gap-4 bg-white">
      <Text className="text-2xl font-bold text-gray-800">AI Chat Assistant</Text>
      <Text className="text-gray-600 text-center px-4">
        Start a conversation with our intelligent chatbot powered by AI
      </Text>
      <Link href="./chat" asChild>
        <Button title="Start Chatting" onPress={() => { }} />
      </Link>
    </View>
  );
}
