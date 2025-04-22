import { getSessionId, setSessionId } from "@/stateManagement";
import { ChatCompletionMessage } from "@/types/app.types";

const API_URL = "http://localhost:5000/ai_assistant/chat";

export const sendMessage = async (prompt: string): Promise<string> => {
  const sessionId = await getSessionId();

  const message: ChatCompletionMessage = {
    prompt,
    sessionId,
  };

  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(message),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch AI response");
  }

  const data = await response.json();

  // Save session ID if it's returned from the backend
  if (data.sessionId && !sessionId) {
    await setSessionId(data.sessionId);
  }

  return data.result;
};
