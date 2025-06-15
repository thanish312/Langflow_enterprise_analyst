// src/components/MessageList.tsx

import React, { useEffect, useRef } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { Message } from "./Message";
import type { Message as MessageType } from "../hooks/useChat";

interface MessageListProps {
  messages: MessageType[];
  isLoading: boolean;
}

const MessageList: React.FC<MessageListProps> = ({ messages, isLoading }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2, display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {messages.map((msg, index) => (
           <Message key={msg.id || index} message={msg} />
        ))}
        {isLoading && messages[messages.length - 1]?.role === 'assistant' && (
          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
             <CircularProgress size={24} sx={{color: "text.secondary"}} />
          </Box>
        )}
      </Box>
      <div ref={scrollRef} />
    </Box>
  );
};

export default MessageList;