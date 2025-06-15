import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const FLOW_ID = "9d4a5019-dc5e-4f83-8f3d-4465953b4503";

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const sessionIdRef = useRef<string>(uuidv4());

  const sendMessage = async (inputValue: string) => {
    const userMessage: Message = {
      id: uuidv4(),
      role: "user",
      content: inputValue,
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Add assistant placeholder
    const assistantMessage: Message = {
      id: uuidv4(),
      role: "assistant",
      content: "",
    };
    setMessages((prev) => [...prev, assistantMessage]);

    try {
      const response = await fetch(
        `/api/v1/run/${FLOW_ID}?stream=false`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            input_value: inputValue,
            session_id: sessionIdRef.current,
            output_type: "chat",
            input_type: "chat",
          }),
        }
      );

      const resultJson = await response.json();

      // Adjust this path based on your backend's response structure
      const assistantText =
        resultJson?.outputs?.[0]?.outputs?.[0]?.results?.message?.text ||
        "Sorry, I couldn't process that.";

      setMessages((prev) => {
        const updated = [...prev];
        const lastIdx = updated.length - 1;
        if (updated[lastIdx]?.role === "assistant") {
          updated[lastIdx].content = assistantText;
        }
        return updated;
      });
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: uuidv4(),
          role: "assistant",
          content: "Sorry, there was an error connecting to the analyst.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    isLoading,
    sendMessage,
    sessionId: sessionIdRef.current,
  };
}