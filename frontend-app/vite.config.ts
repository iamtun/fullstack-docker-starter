import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ''); //Read env

  return {
    plugins: [react()],
    server: { 
      port: 3000,
    },
    define: {
      'process.env': env // Fix process.env is undefined
    }
  }
})
