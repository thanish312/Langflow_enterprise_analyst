// src/components/Message.tsx

import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import type { Message as MessageType } from "../hooks/useChat";

const IMAGE_URL_REGEX = /(https?:\/\/[^\s]+?\.(?:png|jpg|jpeg|svg|gif|webp))/gi;

interface MessageProps {
  message: MessageType;
}

export const Message: React.FC<MessageProps> = ({ message }) => {
  const isUser = message.role === "user";
  
  // Use a more robust check for image-only messages
  const isImageOnly = message.content.trim().match(IMAGE_URL_REGEX) && message.content.trim().match(IMAGE_URL_REGEX)![0] === message.content.trim();
  const parts = message.content.split(IMAGE_URL_REGEX).filter(Boolean);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
      }}
    >
      <Paper
        elevation={isUser ? 2 : 1}
        sx={{
          p: isImageOnly ? 0.5 : 2,
          bgcolor: isUser ? "primary.main" : "background.paper",
          color: isUser ? "white" : "text.primary",
          borderRadius: "16px",
          borderTopRightRadius: isUser ? '4px' : '16px',
          borderTopLeftRadius: isUser ? '16px' : '4px',
          maxWidth: { xs: '90%', sm: '80%', md: '70%' },
          wordBreak: 'break-word',
          boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
        }}
      >
        {parts.map((part, idx) =>
          IMAGE_URL_REGEX.test(part) ? (
            <Box
              key={idx}
              component="a"
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: 'block', mt: parts.length > 1 ? 1 : 0 }}
            >
              <img
                src={part}
                alt="Generated analysis chart"
                style={{
                  borderRadius: '12px',
                  maxWidth: '100%',
                  display: 'block',
                }}
              />
            </Box>
          ) : (
            <Typography key={idx} component="div" className="prose prose-invert">
                <ReactMarkdown
                  components={{
                    p: ({node, ...props}) => <p style={{margin: 0}} {...props} />,
                    // Add more component overrides if needed for styling
                  }}
                >{part}</ReactMarkdown>
            </Typography>
          )
        )}
      </Paper>
    </Box>
  );
};