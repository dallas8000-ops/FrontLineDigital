// Build-time prerender: writes every public route (src/data/routeMeta.ts) to its own HTML file with its own
// <title>, description, canonical and social tags, so crawlers and site graders that do not run JavaScript see
// the real page instead of the home page. Also writes 404.html and sitemap.xml from the same route list.
// Run after `vite build` and `vite build --ssr src/entry-server.tsx --outDir dist-ssr`.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const indexPath = path.join(dist, 'index.html')
const serverEntry = path.join(root, 'dist-ssr', 'entry-server.js')

const { render, routeMeta, formatTitle, canonicalFor } = await import(pathToFileURL(serverEntry).href)

const template = fs.readFileSync(indexPath, 'utf8')
const rootPattern = /<div id="root">[\s\S]*?<\/div>\s*(?=<\/body>)/
if (!rootPattern.test(template)) {
  throw new Error('prerender: could not find <div id="root"> before </body> in dist/index.html')
}

const escapeAttr = (value) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const escapeText = (value) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function setTag(html, pattern, replacement) {
  if (!pattern.test(html)) throw new Error(`prerender: missing head tag ${pattern}`)
  return html.replace(pattern, () => replacement)
}

/** Head for a non-home page: its own title/description/canonical/OG, and no home-only JSON-LD. */
function headFor(html, { title, description, url, robots }) {
  const t = escapeAttr(title)
  const d = escapeAttr(description)
  let out = html
  out = setTag(out, /<title>[\s\S]*?<\/title>/, `<title>${escapeText(title)}</title>`)
  out = setTag(out, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`)
  out = setTag(out, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${d}" />`)
  out = setTag(out, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`)
  out = setTag(out, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${t}" />`)
  out = setTag(out, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${d}" />`)
  out = setTag(out, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${t}" />`)
  out = setTag(out, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${d}" />`)
  out = out.replace(/\s*<!-- data-home-only[^>]*-->/, '')
  out = out.replace(/\s*<script type="application\/ld\+json" data-home-only>[\s\S]*?<\/script>/g, '')
  if (robots) out = out.replace('</title>', `</title>\n    <meta name="robots" content="${robots}" />`)
  return out
}

/** "/" -> dist/index.html, "/about" -> dist/about.html, "/case-studies/x" -> dist/case-studies/x.html (serve cleanUrls). */
function outputFile(routePath) {
  return routePath === '/' ? indexPath : path.join(dist, `${routePath.slice(1)}.html`)
}

/** routePath marks the markup as rendered for that URL, so src/main.tsx hydrates it instead of re-rendering. */
function write(file, html, appHtml, routePath) {
  const attr = routePath ? ` data-prerendered="${routePath}"` : ''
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, html.replace(rootPattern, () => `<div id="root"${attr}>${appHtml}</div>\n  `))
}

let pages = 0
for (const route of routeMeta) {
  const appHtml = render(route.path)
  const html =
    route.path === '/'
      ? template
      : headFor(template, { title: formatTitle(route.title), description: route.description, url: canonicalFor(route.path) })
  write(outputFile(route.path), html, appHtml, route.path)
  pages += 1
}

// Client-only routes (not in the sitemap): an empty-root shell so the app renders them in the browser,
// since Railpack's Caddy serves real files only (Staticfile: index_fallback false).
const clientOnlyRoutes = ['/admin', '/admin-login', '/resume-print', '/marketplace', '/deployment-stripe-automation-center']
for (const routePath of clientOnlyRoutes) {
  const html = headFor(template, {
    title: formatTitle(''),
    description: 'Gilliom Frontline Digital',
    url: canonicalFor(routePath),
    robots: 'noindex',
  })
  write(outputFile(routePath), html, '')
}

// Served with a real 404 status for any path that has no file (Railpack Caddy and local `serve`).
write(
  path.join(dist, '404.html'),
  headFor(template, {
    title: formatTitle('Page Not Found'),
    description: 'The page you are looking for does not exist on gilliomfrontlinedigital.com.',
    url: canonicalFor('/'),
    robots: 'noindex',
  }),
  render('/__not-found__'),
)

const lastmod = new Date().toISOString().slice(0, 10)
const urls = routeMeta
  .filter((r) => r.indexable)
  .map((r) => `  <url>\n    <loc>${canonicalFor(r.path)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`)
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
)

// llms.txt (https://llmstxt.org): Markdown summary for AI crawlers, built from the same route list.
const link = (r) => `- [${r.title.replace(/^Case Study: /, '')}](${canonicalFor(r.path)}): ${r.description}`
const home = routeMeta.find((r) => r.path === '/')
const pagesList = routeMeta.filter((r) => r.indexable && r.path !== '/' && !r.path.startsWith('/case-studies/'))
const caseStudiesList = routeMeta.filter((r) => r.indexable && r.path.startsWith('/case-studies/'))
fs.writeFileSync(
  path.join(dist, 'llms.txt'),
  [
    '# Gilliom Frontline Digital',
    '',
    `> ${home.description}`,
    '',
    'Run by Barney R. Gilliom, based in Kampala, Uganda (U.S. citizen), working remotely worldwide. Contact: barney@gilliomfrontlinedigital.com, +1 656-245-5253.',
    '',
    '## Pages',
    '',
    ...pagesList.map(link),
    '',
    '## Case studies',
    '',
    ...caseStudiesList.map(link),
    '',
  ].join('\n'),
)

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
console.log(`prerender: wrote ${pages} pages, 404.html and sitemap.xml (${urls.length} URLs)`)
