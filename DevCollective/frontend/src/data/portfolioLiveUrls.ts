/** Canonical live-demo URLs — all portfolio apps launch on Railway. */
export const portfolioLiveUrls = {
  /** Unified product: Stripe setup + API Transfer deploy (Deployment-Stripe-center) */
  automationCenter: 'https://stripe-installer.gilliomfrontlinedigital.com/login',
  /** Elite Fintech Systems — web service + one-click demo login */
  eliteFintech: 'https://elite-fintech-web-production.up.railway.app/demo',
  /** Kistie Store — Railway service kistie-store-production */
  kistieStore: 'https://kistie-store-production.up.railway.app',
  blogApi: 'https://blog-2-production-72bc.up.railway.app',
  pcCheckerExtreme: 'https://pc-checker-extreme-production.up.railway.app',
  reactStoreCatalog: 'https://react-store-catalog-1-production.up.railway.app',
  righandFrontend: 'https://righand-production.up.railway.app',
  dbopsWeb: 'https://dbops-web-production.up.railway.app',
  specwrightWeb: 'https://specwright-web-production.up.railway.app',
  enPowerCommand: 'https://enpowercommand-production.up.railway.app',
  /** @deprecated merged into automationCenter */
  stripeInstaller: 'https://stripe-installer.gilliomfrontlinedigital.com/login',
  /** @deprecated merged into automationCenter — do not link from portfolio cards */
  apiTransfer: 'https://stripe-installer.gilliomfrontlinedigital.com/login',
  /** Contact form + admin API for gilliomfrontlinedigital.com (portfolio backend on Railway). */
  apiBase: 'https://frontlinedigital-1-production.up.railway.app/api',
} as const

/** Legacy Render / dead custom domains — never link from the portfolio. */
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

/** Superseded Railway hostnames — remap stored URLs to the current service in pickLiveUrl. */
export const deprecatedRailwayHosts = [
  'kristie-store-production.up.railway.app',
  'react-store-catalog-production.up.railway.app',
  'righand-frontend-production.up.railway.app',
  'api-transfer-production.up.railway.app',
  'stripe-installer-production.up.railway.app',
] as const

/** API-only Railway services — not portfolio live-demo targets (use the web service URL). */
export const apiOnlyRailwayHosts = [
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
  if (apiOnlyRailwayHosts.some((host) => url.includes(host))) return false
  return true
}
