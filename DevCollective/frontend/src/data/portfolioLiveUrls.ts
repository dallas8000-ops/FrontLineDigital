/** Canonical live-demo URLs (Railway production). */
export const portfolioLiveUrls = {
  kristieStore: 'https://kistie-store-production.up.railway.app',
  blogApi: 'https://blog-2-production-72bc.up.railway.app',
  reactStoreCatalog: 'https://react-store-catalog-production.up.railway.app',
  pcCheckerExtreme: 'https://pc-checker-extreme-production.up.railway.app',
  righandFrontend: 'https://righand-frontend-production.up.railway.app',
  dbopsWeb: 'https://dbops-web-production.up.railway.app',
  specwrightWeb: 'https://specwright-web-production.up.railway.app',
} as const

/** Public marketing site — custom domain with Railway fallback. */
export const marketingSiteUrls = {
  primary: 'https://gilliomfrontlinedigital.com',
  /** Working Railway deploy (use until primary custom domain is reattached). */
  railway: 'https://frontlinedigital-1-production.up.railway.app',
  railwayLegacy: 'https://frontlinedigital-production.up.railway.app',
} as const
