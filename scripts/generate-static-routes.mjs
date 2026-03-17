import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '../dist')

const routes = [
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

const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')

for (const route of routes) {
  const dir = path.join(distDir, route)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), indexHtml)
  console.log(`✓ Généré : dist${route}/index.html`)
}

console.log('\n✅ Routes statiques générées avec succès.')
