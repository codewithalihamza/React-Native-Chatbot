import { Message as MessageType } from "@/types/app.types";
import { Text, View } from "react-native";

export const Message = ({ message }: { message: MessageType }) => {
    const isUser = message.role === "user";

    return (
        <View
            className={`flex flex-row ${isUser ? "justify-end" : "justify-start"
                } mb-4`}
        >
            <View
                className={`max-w-[80%] rounded-2xl p-3 ${isUser ? "bg-blue-500" : "bg-gray-200"
                    }`}
            >
                <Text
                    className={`text-[16px] ${isUser ? "text-white" : "text-gray-800"}`}
                >
                    {message.content}
                </Text>
            </View>
        </View>
    );
}; 