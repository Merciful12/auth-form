import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import linaria from '@linaria/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? process.env.SITE_BASE : '',
  plugins: [react(), linaria()],
})
