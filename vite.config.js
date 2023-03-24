import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'
import prettierPlugin from 'vite-plugin-prettier'

export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      fix: true,
      cache: true,
      include: './src/*/.@(js|jsx|ts|tsx)',
  }),
  prettierPlugin(),],
})
