import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

const routes = [
  '/',
  '/a-propos',
  '/methode',
  '/cas-client/ctic-congo',
  '/tarifs',
  '/contact',
  '/mentions-legales',
  '/politique-confidentialite',
  '/questions-frequentes',
  '/audit',
]

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://www.delven.fr',
      dynamicRoutes: routes,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString().split('T')[0],
    }),
  ],
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
