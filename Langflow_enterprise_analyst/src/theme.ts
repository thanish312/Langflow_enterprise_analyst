// src/theme.ts

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212', // A deep, soft black
      paper: '#1E1E1E',   // Slightly lighter for surfaces like headers and input bars
    },
    primary: {
      main: '#3B82F6', // A vibrant blue for user messages and interactive elements
    },
    text: {
      primary: '#E0E0E0',   // Off-white for primary text
      secondary: '#B0B0B0', // Lighter gray for secondary text
    },
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", Arial, sans-serif',
    h6: {
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #1E1E1E;
        }
        ::-webkit-scrollbar-thumb {
          background: #4A4A4A;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `,
    },
  },
});

export default theme;