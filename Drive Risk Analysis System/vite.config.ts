import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const API_TARGET = 'http://localhost:3000'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: API_TARGET,
        changeOrigin: true,
        secure: true,
        headers: {
          'ngrok-skip-browser-warning': 'true',
        },
        configure: (proxy) => {
          proxy.on('proxyRes', (proxyRes) => {
            const cookies = proxyRes.headers['set-cookie']
            if (!cookies) return

            // Make cookies work on http://localhost during local dev
            proxyRes.headers['set-cookie'] = cookies.map((cookie) =>
              cookie
                .replace(/;\s*Secure/gi, '')
                .replace(/;\s*SameSite=None/gi, '; SameSite=Lax')
                .replace(/;\s*Domain=[^;]+/gi, '')
            )
          })
        },
      },
    },
  },
})
