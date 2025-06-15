// src/components/ChatInputBar.tsx

import React, { useState } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

interface ChatInputBarProps {
  onSendMessage: (inputValue: string) => void;
  isLoading: boolean;
}

const ChatInputBar: React.FC<ChatInputBarProps> = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    onSendMessage(input);
    setInput("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        placeholder="Ask the analyst..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={isLoading}
        autoComplete="off"
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '24px',
            backgroundColor: '#333333',
            '& fieldset': {
              borderColor: 'transparent',
            },
            '&:hover fieldset': {
              borderColor: '#444444',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'primary.main',
            },
          },
          '& .MuiInputBase-input': {
            color: 'text.primary',
          },
        }}
      />
      <IconButton
        type="submit"
        color="primary"
        disabled={isLoading || !input.trim()}
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
          '&.Mui-disabled': {
            bgcolor: '#444',
            color: '#777'
          }
        }}
      >
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default ChatInputBar;