/** Canonical live-demo URLs — all Railway. */
export const portfolioLiveUrls = {
  kristieStore: 'https://kristie-store.onrender.com',
  blogApi: 'https://blog-2-hggg.onrender.com',
  reactStoreCatalog: 'https://store.gilliomfrontlinedigital.com',
  reactStoreCatalogMirror: 'https://react-store-catalog-1-production.up.railway.app',
  pcCheckerExtreme: 'https://pc-checker-extreme-production.up.railway.app',
  righandFrontend: 'https://righand-production.up.railway.app',
  dbopsWeb: 'https://dbops-api-production-5047.up.railway.app',
  specwrightWeb: 'https://specwright-api-production.up.railway.app',
  apiTransfer: 'https://api-transfer-production.up.railway.app',
  enPowerCommand: 'https://enpowercommand-production.up.railway.app',
  stripeInstaller: 'https://stripe-installer-production.up.railway.app',
} as const

/** Render hosts that are dead / fully migrated to Railway. */
export const deadRenderHosts = [
  'pc-checker-extreme.onrender.com',
  'righand-frontend.onrender.com',
  'dbops-web.onrender.com',
  'react-store-catalog.onrender.com',
  'gilliomfrontlinedigital.onrender.com',
] as const

/** Railway *-production hosts that are currently returning 502 (deploy issues). */
export const brokenRailwayHosts = [
  'kistie-store-production.up.railway.app',
  'blog-2-production-72bc.up.railway.app',
  'react-store-catalog-production.up.railway.app',
  'righand-frontend-production.up.railway.app',
] as const

/** Public marketing site — custom domain with Railway fallback. */
export const marketingSiteUrls = {
  primary: 'https://gilliomfrontlinedigital.com',
  railway: 'https://frontlinedigital-1-production.up.railway.app',
  railwayLegacy: 'https://frontlinedigital-production.up.railway.app',
} as const
