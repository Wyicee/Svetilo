import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Настройка алиаса
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/styles/variables.scss";
        @import "@/styles/fonts.scss";
        `,
      }
    }
  },
  server: {
    historyApiFallback: true,
  },
});