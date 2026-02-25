import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: [
      '5173-i6f4n2dcmldeuzmahvzpy-c54f363d.us2.manus.computer',
      'localhost',
      '127.0.0.1',
      '::1'
    ]
  }
})
