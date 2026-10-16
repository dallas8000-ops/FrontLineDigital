// Build-time prerender: replaces the static fallback inside <div id="root"> in dist/index.html with the
// fully rendered home page, so crawlers and site graders that do not run JavaScript see the real content.
// Run after `vite build` and `vite build --ssr src/entry-server.tsx --outDir dist-ssr`.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const indexPath = path.join(root, 'dist', 'index.html')
const serverEntry = path.join(root, 'dist-ssr', 'entry-server.js')

const { render } = await import(pathToFileURL(serverEntry).href)
const appHtml = render('/')

const template = fs.readFileSync(indexPath, 'utf8')
const rootPattern = /<div id="root">[\s\S]*?<\/div>\s*(?=<\/body>)/
if (!rootPattern.test(template)) {
  throw new Error('prerender: could not find <div id="root"> before </body> in dist/index.html')
}
fs.writeFileSync(indexPath, template.replace(rootPattern, () => `<div id="root">${appHtml}</div>\n  `))
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })

const words = appHtml.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean)
console.log(`prerender: wrote / (${words.length} words) to dist/index.html`)
