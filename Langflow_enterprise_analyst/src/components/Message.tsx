import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import type { Message as MessageType } from "../hooks/useChat";

const IMAGE_URL_REGEX = /(https?:\/\/[^\s]+?\.(?:png|jpg|jpeg|svg|gif))/gi;

interface MessageProps {
  message: MessageType;
}

const MessageBubble: React.FC<MessageProps> = ({ message }) => {
  const isUser = message.role === "user";
  const parts = message.content.split(IMAGE_URL_REGEX).filter(Boolean);

  return (
    <Box
      display="flex"
      justifyContent={isUser ? "flex-end" : "flex-start"}
      alignItems="flex-end"
    >
      <Paper
        elevation={2}
        sx={{
          bgcolor: isUser ? "#1976d2" : "#232323",
          color: isUser ? "#ECECF1" : "#ECECF1",
          px: 2,
          py: 1.5,
          borderRadius: 3,
          borderTopRightRadius: isUser ? 0 : 12,
          borderTopLeftRadius: isUser ? 12 : 0,
          maxWidth: "70%",
          minWidth: 60,
          mb: 0.5,
          boxShadow: 1,
          border: "1px solid #2e2e2e",
        }}
      >
        {parts.map((part, idx) =>
          IMAGE_URL_REGEX.test(part) ? (
            <Box key={idx} my={1}>
              <img
                src={part}
                alt="Embedded"
                style={{
                  borderRadius: 8,
                  border: "1px solid #2e2e2e",
                  maxWidth: "100%",
                  display: "block",
                  margin: "0.5em 0",
                }}
              />
            </Box>
          ) : (
            <Typography
              key={idx}
              variant="body1"
              component="div"
              sx={{ whiteSpace: "pre-line" }}
            >
              <ReactMarkdown>{part}</ReactMarkdown>
            </Typography>
          )
        )}
      </Paper>
    </Box>
  );
};

export default MessageBubble;