import { Message } from "@/components/Message";
import { ChatInput } from "@/components/input";
import { useChat } from "@/hooks/useChat";
import { useEffect, useRef } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

export default function Chat() {
    const { messages, input, setInput, handleSendMessage, loading, streamingMessage } = useChat();
    const scrollViewRef = useRef<ScrollView>(null);

    useEffect(() => {
        // Scroll to bottom when messages change
        scrollViewRef.current?.scrollToEnd({ animated: true });
    }, [messages, streamingMessage]);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            className="flex-1 bg-white"
        >
            <ScrollView
                ref={scrollViewRef}
                className="flex-1 px-4 pt-4"
                contentContainerStyle={{ flexGrow: 1 }}
            >
                {messages.map((message, index) => (
                    <Message key={index} message={message} />
                ))}
                {streamingMessage && <Message message={streamingMessage} />}
            </ScrollView>

            <ChatInput
                value={input}
                onChangeText={setInput}
                onSend={handleSendMessage}
                disabled={loading}
            />
        </KeyboardAvoidingView>
    );
} 