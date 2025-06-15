import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://6ae0-2406-7400-10a-69d1-aab-f074-2d45-376a.ngrok-free.app',
        changeOrigin: true,
      },
    },
  },
});
