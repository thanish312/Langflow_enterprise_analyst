import React, { useEffect, useRef } from "react";
import { Box, Fade, Typography } from "@mui/material";
import MessageBubble from "./Message";
import type { Message } from "../hooks/useChat";

interface MessageListProps {
  messages: Message[];
  isLoading: boolean;
}

const MessageList: React.FC<MessageListProps> = ({ messages, isLoading }) => {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <Box
      flex={1}
      overflow="auto"
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      sx={{
        background: "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)",
        borderRadius: 3,
        py: 2,
        px: 0,
        minHeight: "60vh",
      }}
    >
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}
      {isLoading && (
        <Fade in>
          <Box display="flex" alignItems="center" gap={1} ml={1} mb={1}>
            <ThreeDotLoader />
            <Typography variant="body2" color="text.secondary">
              Analyst is thinking…
            </Typography>
          </Box>
        </Fade>
      )}
      <div ref={bottomRef} />
    </Box>
  );
};

// Three-dot loader animation using Material UI
const ThreeDotLoader = () => (
  <Box display="flex" alignItems="center" gap={0.5}>
    {[0, 1, 2].map((i) => (
      <Box
        key={i}
        sx={{
          width: 8,
          height: 8,
          bgcolor: "grey.400",
          borderRadius: "50%",
          animation: "mui-bounce 1s infinite",
          animationDelay: `${i * 0.15}s`,
          "@keyframes mui-bounce": {
            "0%, 80%, 100%": { transform: "scale(1)" },
            "40%": { transform: "scale(1.5)" },
          },
        }}
      />
    ))}
  </Box>
);

export default MessageList;