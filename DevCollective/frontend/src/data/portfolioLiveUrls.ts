/** Canonical live-demo URLs — Railway only (verified 2026-06). */
export const portfolioLiveUrls = {
  reactStoreCatalog: 'https://react-store-catalog-1-production.up.railway.app',
  righandFrontend: 'https://righand-production.up.railway.app',
  dbopsWeb: 'https://dbops-web-production.up.railway.app',
  specwrightWeb: 'https://specwright-web-production.up.railway.app',
  apiTransfer: 'https://api-transfer-production.up.railway.app',
  enPowerCommand: 'https://enpowercommand-production.up.railway.app',
  stripeInstaller: 'https://stripe-installer-production.up.railway.app',
  /** Backend for contact form + admin (frontend is on gilliomfrontlinedigital.com). */
  apiBase: 'https://frontlinedigital-1-production.up.railway.app/api',
} as const

/** Legacy hosts — never link these from the portfolio. */
export const legacyDeadHosts = [
  'onrender.com',
  'render.com',
  'gilliomfrontlinedigital.onrender.com',
  'kristie-store.onrender.com',
  'blog-2-hggg.onrender.com',
  'pc-checker-extreme.onrender.com',
  'righand-frontend.onrender.com',
  'dbops-web.onrender.com',
  'react-store-catalog.onrender.com',
  'frontlinedigital.onrender.com',
  'store.gilliomfrontlinedigital.com',
] as const

/** Railway hosts that currently return 502 / timeout — hide live-demo buttons. */
export const brokenRailwayHosts = [
  'kistie-store-production.up.railway.app',
  'kristie-store-production.up.railway.app',
  'blog-2-production-72bc.up.railway.app',
  'react-store-catalog-production.up.railway.app',
  'righand-frontend-production.up.railway.app',
  'pc-checker-extreme-production.up.railway.app',
  'stripe-installer-production.up.railway.app',
  'dbops-api-production-5047.up.railway.app',
  'specwright-api-production.up.railway.app',
] as const

/** Public marketing site — custom domain with Railway fallback. */
export const marketingSiteUrls = {
  primary: 'https://gilliomfrontlinedigital.com',
  railway: 'https://frontlinedigital-1-production.up.railway.app',
} as const

export function isLiveDemoUrlHealthy(url: string | undefined): boolean {
  if (!url) return false
  if (legacyDeadHosts.some((host) => url.includes(host))) return false
  if (brokenRailwayHosts.some((host) => url.includes(host))) return false
  return true
}
