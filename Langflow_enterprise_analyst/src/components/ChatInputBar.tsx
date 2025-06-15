import React, { useState } from "react";
import { Box, TextField, IconButton, InputAdornment } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

interface ChatInputBarProps {
  sendMessage: (inputValue: string) => void;
  isLoading: boolean;
}

const ChatInputBar: React.FC<ChatInputBarProps> = ({ sendMessage, isLoading }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} display="flex" alignItems="center" gap={1}>
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        placeholder="Type your message…"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={isLoading}
        sx={{
          bgcolor: "#232323",
          borderRadius: 2,
          input: {
            color: "#ECECF1",
            fontFamily: "Inter, Segoe UI, Arial, sans-serif",
          },
          "& .MuiOutlinedInput-root": {
            border: "none",
            "& fieldset": { border: "none" },
            "&.Mui-focused": {
              boxShadow: "0 0 0 2px #1976d2",
            },
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                type="submit"
                color="primary"
                disabled={isLoading || !input.trim()}
                sx={{
                  opacity: isLoading || !input.trim() ? 0.5 : 1,
                  cursor: isLoading || !input.trim() ? "not-allowed" : "pointer",
                  bgcolor: "#1976d2",
                  color: "#ECECF1",
                  "&:hover": { bgcolor: "#1565c0" },
                }}
                aria-label="Send"
              >
                <SendIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default ChatInputBar;