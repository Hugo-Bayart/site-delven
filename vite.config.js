import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})

// Note: En production (Vercel), les routes /api/contact et /api/audit sont gérées automatiquement.
// Le proxy ci-dessus est uniquement pour le développement local avec un serveur Express sur le port 3001.
// Pour développer sans serveur local, utilisez: vercel dev
