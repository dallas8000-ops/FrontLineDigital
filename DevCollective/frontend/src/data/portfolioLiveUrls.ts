/** Canonical live-demo URLs — verified responding hosts (Railway primaries often 502). */
export const portfolioLiveUrls = {
  kristieStore: 'https://kristie-store.onrender.com',
  blogApi: 'https://blog-2-hggg.onrender.com',
  reactStoreCatalog: 'https://store.gilliomfrontlinedigital.com',
  reactStoreCatalogMirror: 'https://react-store-catalog-1-production.up.railway.app',
  pcCheckerExtreme: 'https://pc-checker-extreme.onrender.com',
  righandFrontend: 'https://righand-frontend.onrender.com',
  dbopsWeb: 'https://dbops-web.onrender.com',
  specwrightWeb: 'https://specwright-web-production.up.railway.app',
} as const

/** Railway *-production hosts that currently return 502 — migrated away on load. */
export const brokenRailwayHosts = [
  'kistie-store-production.up.railway.app',
  'blog-2-production-72bc.up.railway.app',
  'react-store-catalog-production.up.railway.app',
  'pc-checker-extreme-production.up.railway.app',
  'righand-frontend-production.up.railway.app',
  'dbops-web-production.up.railway.app',
] as const

/** Public marketing site — custom domain with Railway fallback. */
export const marketingSiteUrls = {
  primary: 'https://gilliomfrontlinedigital.com',
  railway: 'https://frontlinedigital-1-production.up.railway.app',
  railwayLegacy: 'https://frontlinedigital-production.up.railway.app',
} as const
