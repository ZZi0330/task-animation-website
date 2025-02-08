import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:'/task-animation-website/',
  plugins: [react()],
  build: {
      rollupOptions: {
      input: 'index.html', // 指定入口文件
    },
  } 
})
