import { isLiveDemoUrlHealthy, portfolioLiveUrls } from './portfolioLiveUrls'

export type PortfolioProject = {
  title: string
  stack: string
  desc: string
  /** One line: what this live app proves you can build for a client */
  proves?: string
  url?: string
  repoUrl?: string
  screenshot?: string
  detailPath?: string
  highlights?: string[]
  flagship?: boolean
}

export const defaultPortfolioProjects: PortfolioProject[] = [
  {
    title: 'DBOps Control Center',
    proves: 'Enterprise DB tooling, RBAC, audit trails, and billing',
    stack: 'FastAPI, SQLAlchemy, Alembic, PostgreSQL, React, Vite, JWT, Stripe, Railway',
    desc: 'Production database operations platform with JWT + RBAC, whitelisted read-only SQL reports, incidents with audit history, scheduled delivery, OIDC SSO, and Stripe billing.',
    url: portfolioLiveUrls.dbopsWeb,
    repoUrl: 'https://github.com/dallas8000-ops/DBOps-Control-Center',
    screenshot: '/images/portfolio/dbops-control-center-features.png',
    flagship: true,
    highlights: [
      'DBA user lifecycle, execution audit trail, scheduled report delivery, and Stripe subscription billing.',
      'Multi-tenant RBAC, OIDC SSO, and Railway deployment with PostgreSQL.',
    ],
  },
  {
    title: 'Deployment & Stripe Automation Center',
    proves: 'Stripe setup, encrypted vault, API migration, and Railway deploy in one platform',
    stack: 'Python, Django, React, TypeScript, AES-256-GCM vault, WebSockets, Celery, Railway, Render, Fly',
    desc: 'One agency platform for Stripe setup and cloud deploy — encrypted per-project vault, live pipeline, Render→Railway migration, GitHub import, deploy pipelines, and AI diagnostics.',
    url: portfolioLiveUrls.automationCenter,
    repoUrl: 'https://github.com/dallas8000-ops/Stripe-Installer',
    screenshot: '/images/portfolio/stripe-installer-login.png',
    flagship: true,
    highlights: [
      'AES-256-GCM vault keeps secrets out of AI prompts, logs, and frontend state.',
      'One-click deploy, Render→Railway transfer runs, and webhook readiness in a shared project workspace.',
    ],
  },
  {
    title: 'Elite Fintech Systems',
    url: portfolioLiveUrls.eliteFintech,
    repoUrl: 'https://github.com/dallas8000-ops/Elite-Fintech-Web',
    flagship: true,
    proves: 'Multi-tenant fintech billing, FX pricing intelligence, and East Africa regionalization',
    stack: 'Django 5, DRF, React 19, TypeScript, Tailwind, PostgreSQL, JWT, Django Channels, Docker Compose, Railway',
    desc: 'East Africa-focused fintech billing platform for Uganda, Kenya, Rwanda, and Tanzania with org-level RBAC, JWT auth, real-time billing events, and daily FX-driven pricing. Mobile-money-first architecture with Stripe as optional fallback for international card flows.',
    screenshot: '/images/portfolio/elite-fintech-systems.png',
    highlights: [
      'Daily FX engine converts USD anchors to local VAT-inclusive pricing with persisted market snapshots.',
      'Role-based multi-tenant flows with smoke-tested billing paths.',
    ],
  },
  {
    title: 'Kistie Store',
    url: portfolioLiveUrls.kistieStore,
    repoUrl: 'https://github.com/dallas8000-ops/Kistie-Store',
    screenshot: '/images/portfolio/kistie-store-shop.png',
    flagship: true,
    proves: 'E-commerce, checkout, and multi-currency storefronts',
    stack: 'Python 3.11, Django 5.2, DRF, React 18, TypeScript, PostgreSQL, GitHub Actions, Railway',
    desc: 'Capstone e-commerce platform for a Kampala-based apparel storefront with production architecture for East Africa and worldwide checkout.',
    highlights: [
      '11 user stories with acceptance criteria; full usability testing on production.',
      'Multi-currency checkout, mobile money flow, layered security, and GitHub Actions CI.',
    ],
  },
  {
    title: 'SilverFox',
    url: portfolioLiveUrls.silverfox,
    repoUrl: 'https://github.com/dallas8000-ops/SilverFox',
    screenshot: '/images/portfolio/silverfox-shop.png',
    flagship: true,
    proves: "Men's fashion e-commerce, catalog integrity, and live FX pricing",
    stack: 'Python 3.11, Django 5.2, DRF, PostgreSQL, WhiteNoise, Gunicorn, Railway',
    desc: "Premium men's fashion boutique — 128-product catalog with one unique image per SKU, live EUR/USD/UGX/KES exchange rates, staff dashboard, and Kistie-style Django SSR storefront.",
    highlights: [
      '128 products across 8 categories with catalog integrity sync and per-product image mapping.',
      'Multi-currency shop, cart/checkout flow, staff dashboard, and Railway production deploy.',
    ],
  },
  {
    title: 'RigHand AI',
    proves: 'Mobile-first SaaS, subscriptions, and offline-capable apps',
    stack: 'React, Django, PostgreSQL, Capacitor, Stripe, Railway',
    desc: 'Expense and profit tracking for truck drivers with offline-first sync, subscriptions, GPS/OBD trip mileage, and tax-ready exports.',
    url: portfolioLiveUrls.righandFrontend,
    repoUrl: 'https://github.com/dallas8000-ops/RigHand',
    screenshot: '/images/portfolio/righand-ai-dashboard.png',
    flagship: true,
    highlights: [
      'Free/Pro/Fleet tiers with Stripe billing, Capacitor Android app, and Railway deployment.',
      'Offline-first IndexedDB sync, GPS mileage tracking, and tax-ready CSV/PDF exports.',
    ],
  },
  {
    title: 'Django REST Blog API',
    url: portfolioLiveUrls.blogApi,
    proves: 'REST APIs, JWT auth, OAuth, and real-time features',
    stack: 'Python 3.11, Django 5.2, DRF, PostgreSQL, JWT, Channels, WebSockets, Gunicorn, Railway',
    desc: 'Production Django blog with posts, profiles, comments, JWT REST API, WebSockets, GitHub OAuth, and live Railway deployment.',
    highlights: [
      'WebSocket new-post alerts, GitHub OAuth, JWT-gated REST API, and verified unittest coverage.',
    ],
  },
  {
    title: 'React Store Catalog',
    proves: 'Modern React SPAs with admin portals and automated QA',
    stack: 'React 19, TypeScript, Vite 7, Vitest, Framer Motion, Express, PostgreSQL, JWT, Railway',
    desc: 'Full-stack product catalog with admin portal, coupon management, and Vitest + Testing Library suite.',
    url: portfolioLiveUrls.reactStoreCatalog,
    screenshot: '/images/portfolio/react-store-catalog.png',
    highlights: [
      'Framer Motion UI, JWT admin backend, ARIA-verified interactions, and GitHub Actions CI on every push.',
    ],
  },
  {
    title: 'PC Checker Extreme',
    url: portfolioLiveUrls.pcCheckerExtreme,
    proves: 'Systems diagnostics, monitoring dashboards, and AI-assisted ops tooling',
    stack: 'Python, Django, WMI, winget, OpenAI, Railway',
    desc: 'Cloud-hosted diagnostic command center with health matrix, live telemetry, scan history, and AI-powered system analysis.',
    screenshot: '/images/portfolio/pc-checker-extreme.png',
    detailPath: '/projects/pc-checker',
    highlights: [
      'Live CPU/RAM/disk telemetry, scan archive, and subsystem waveform charts in a command-center UI.',
      'Deep WMI hardware ID, winget update sweep, Windows Update status, and optional OpenAI neural review.',
    ],
  },
  {
    title: 'Specwright',
    proves: 'AST-based API documentation, test scaffolding, and developer tooling',
    stack: 'FastAPI, Python 3.11, React 18, TypeScript, Vite, SQLite, OpenAI, Stripe, Railway',
    desc: 'The documentation layer for FastAPI teams. Reads your codebase via AST analysis and keeps OpenAPI specs, pytest scaffolds, and ER diagrams in sync with routes and models.',
    url: portfolioLiveUrls.specwrightWeb,
    screenshot: '/images/portfolio/specwright.png',
    highlights: [
      'Specwright Score dashboard tracks route health, doc/test coverage, spec freshness, and drift alerts across repos.',
      'Grounded AI suite supports migration notes, breaking-change triage, and scoped chat from AST-locked context.',
    ],
  },
  {
    title: 'EnPowerCommand',
    proves: 'Utility billing SaaS, subscription management, and client dashboards',
    stack: 'Node.js, Express, React, TypeScript, PostgreSQL, Stripe, Railway',
    desc: 'Energy and utility billing command center with subscription tiers, usage tracking, client-facing dashboards, and automated billing with Stripe Checkout and the Customer Portal.',
    url: portfolioLiveUrls.enPowerCommand,
    repoUrl: 'https://github.com/dallas8000-ops/EnPowerCommand',
    highlights: [
      'Live subscription management with Stripe Checkout, billing portal, and webhook-driven tier sync.',
      'Multi-client dashboard with usage analytics and automated invoice generation.',
    ],
  },
]

/** Drop legacy Render/dead URLs; keep all Railway live-demo links. */
export function withHealthyDemoUrl(project: PortfolioProject): PortfolioProject {
  if (!project.url || isLiveDemoUrlHealthy(project.url)) {
    return project
  }
  const { url: _removed, ...rest } = project
  return rest
}
