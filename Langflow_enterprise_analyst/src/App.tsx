// src/App.tsx

import React from "react";
import { Box, AppBar, Toolbar, Typography, Container } from "@mui/material";
import MessageList from "./components/MessageList";
import ChatInputBar from "./components/ChatInputBar";
import { useChat } from "./hooks/useChat";

const App: React.FC = () => {
  const { messages, isLoading, sendMessage } = useChat();

  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "background.default",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppBar position="static" elevation={1} sx={{ bgcolor: "background.paper" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
            Enterprise Analyst Bot
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
        <Container maxWidth="md" sx={{ flex: 1, display: 'flex', flexDirection: 'column', py: 2 }}>
          <MessageList messages={messages} isLoading={isLoading} />
        </Container>
      </Box>

      <Box sx={{ p: 2, bgcolor: "background.paper", borderTop: '1px solid #333' }}>
        <Container maxWidth="md">
          <ChatInputBar onSendMessage={sendMessage} isLoading={isLoading} />
        </Container>
      </Box>
    </Box>
  );
};

export default App;