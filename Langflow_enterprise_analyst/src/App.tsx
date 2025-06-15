import React from "react";
import { Box, AppBar, Toolbar, Typography, Paper } from "@mui/material";
import MessageList from "./components/MessageList";
import ChatInputBar from "./components/ChatInputBar";
import { useChat } from "./hooks/useChat";

const App: React.FC = () => {
  const { messages, isLoading, sendMessage } = useChat();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Inter, Segoe UI, Arial, sans-serif",
      }}
    >
      <AppBar position="static" elevation={1} sx={{ bgcolor: "background.paper", color: "text.primary", boxShadow: 2 }}>
        <Toolbar>
          <Typography variant="h6" fontWeight={700} sx={{ flexGrow: 1, textAlign: "center" }}>
            Enterprise Analyst Bot
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ flex: 1, overflow: "auto", px: { xs: 0, sm: 2 }, py: 2 }}>
        <MessageList messages={messages} isLoading={isLoading} />
      </Box>
      <Paper
        elevation={6}
        sx={{
          position: "sticky",
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: "background.paper",
          boxShadow: 2,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          p: 1.5,
        }}
      >
        <ChatInputBar sendMessage={sendMessage} isLoading={isLoading} />
      </Paper>
    </Box>
  );
};

export default App;