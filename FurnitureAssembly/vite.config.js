import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif', '**/*.svg', '**/*.json'],
  server: {
    fs: {
      allow: ['..']
    }
  },
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html',
      }
    }
  }
})
