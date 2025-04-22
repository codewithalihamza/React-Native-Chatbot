import { Ionicons } from "@expo/vector-icons";
import { TextInput, TouchableOpacity, View } from "react-native";

interface ChatInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onSend: () => void;
  placeholder?: string;
  disabled?: boolean;
}

export const ChatInput = ({
  value,
  onChangeText,
  onSend,
  placeholder = "Type a message...",
  disabled = false,
}: ChatInputProps) => {
  return (
    <View className="flex-row items-center space-x-2 p-2 bg-white border-t border-gray-200">
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        className="flex-1 border border-gray-300 rounded-full px-4 py-2 bg-gray-50"
        multiline
        maxLength={1000}
        onSubmitEditing={onSend}
        editable={!disabled}
      />
      <TouchableOpacity
        onPress={onSend}
        disabled={disabled || !value.trim()}
        className={`w-10 h-10 rounded-full items-center justify-center ${disabled || !value.trim() ? "bg-gray-300" : "bg-blue-500"
          }`}
      >
        <Ionicons
          name="send"
          size={20}
          color={disabled || !value.trim() ? "#666" : "white"}
        />
      </TouchableOpacity>
    </View>
  );
};
