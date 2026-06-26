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
    title: 'EastBridge Ops Intelligence',
    proves: 'Regulatory intelligence, trade compliance, vendor diligence, and cited AI assistant for EU companies in East Africa',
    stack: 'Django 5, DRF, React 19, TypeScript, PostgreSQL, Celery, pgvector, OpenAI, Railway',
    desc: 'Live market-entry and operations platform for European companies in Uganda, Kenya, Tanzania, Rwanda, and the EAC — source-backed regulatory changes, trade procedures, economic indicators, vendor due diligence, and a citation-required assistant.',
    url: portfolioLiveUrls.eastbridge,
    repoUrl: 'https://github.com/dallas8000-ops/EastBridge-OPS',
    flagship: true,
    highlights: [
      'Regulatory change engine with official source URLs, impact summaries, and alert subscriptions.',
      'Proof-based AI assistant — answers only from cited, indexed evidence (OpenAI when configured).',
    ],
  },
  {
    title: 'AgriPay Logistics AI',
    proves: 'Agri-logistics billing, mobile money flows, and Stripe subscriptions for East Africa',
    stack: 'Django 5, DRF, React, TypeScript, PostgreSQL, Stripe, Railway',
    desc: 'Production logistics and payments for farmers and buyers — live Stripe subscriptions and checkout; MTN MoMo integration verified against the provider sandbox (production-ready on live credentials).',
    url: portfolioLiveUrls.agripayLogistics,
    repoUrl: 'https://github.com/dallas8000-ops/AgriPay-Logistics-AI',
    flagship: true,
    highlights: [
      'Live Stripe Checkout and webhooks with farmer profiles, orders, and subscription tiers.',
      'MTN MoMo sandbox-verified — requestToPay, status polling, and webhooks; AI assistant (OpenAI, configurable).',
    ],
  },
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
      'Live Stripe-backed plan limits and subscription billing; JWT + RBAC enforced on every route.',
      'Multi-tenant RBAC, OIDC SSO, optional AI assist (OpenAI), and Railway deployment with PostgreSQL.',
    ],
  },
  {
    title: 'Deployment & Stripe Automation Center',
    proves: 'Stripe setup, encrypted vault, deploy automation, and Railway production hosting',
    stack: 'Python, Django, React, TypeScript, AES-256-GCM vault, WebSockets, Celery, Railway',
    desc: 'Agency platform for Stripe setup and Railway deploy — encrypted per-project vault, live pipeline, GitHub import, deploy pipelines, and AI diagnostics.',
    url: portfolioLiveUrls.automationCenter,
    repoUrl: 'https://github.com/dallas8000-ops/Stripe-Installer',
    screenshot: '/images/portfolio/stripe-installer-login.png',
    flagship: true,
    highlights: [
      'AES-256-GCM vault keeps secrets out of AI prompts, logs, and frontend state.',
      'Live Stripe billing automation — webhooks, encrypted vault, and Railway deploy in one workspace.',
    ],
  },
  {
    title: 'Elite Fintech Systems',
    url: portfolioLiveUrls.eliteFintech,
    repoUrl: 'https://github.com/dallas8000-ops/Elite-Fintech-Systems',
    flagship: true,
    proves: 'Multi-tenant fintech billing, FX pricing intelligence, and East Africa regionalization',
    stack: 'Django 5, DRF, React 19, TypeScript, Tailwind, PostgreSQL, JWT, Django Channels, Docker Compose, Railway',
    desc: 'East Africa fintech billing for Uganda, Kenya, Rwanda, and Tanzania — org-level RBAC, JWT auth, daily FX-driven pricing, and live Stripe checkout as the international fallback rail. Flutterwave mobile-money integration in progress.',
    screenshot: '/images/portfolio/elite-fintech-systems.png',
    highlights: [
      'Daily FX engine converts USD anchors to local VAT-inclusive pricing with persisted market snapshots.',
      'Live Stripe checkout; mobile-money-first architecture with Flutterwave integration in progress.',
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
    proves: 'Trucking expense, profit, compliance, and fleet ops for owner-operators',
    stack: 'React, Django, PostgreSQL, Capacitor, Stripe, Railway',
    desc: 'Expense and profit platform for commercial and private truck operators — offline-first sync, GPS/OBD trip logging, IFTA and Schedule C exports, native Android (Capacitor), and subscription tiers with live Stripe payments.',
    url: portfolioLiveUrls.righandFrontend,
    repoUrl: 'https://github.com/dallas8000-ops/RigHand',
    screenshot: '/images/portfolio/righand-ai-dashboard.png',
    flagship: true,
    highlights: [
      'Offline-first IndexedDB sync, GPS/OBD mileage, and tax-ready CSV/PDF exports.',
      'Free, Compliance Pro, and Fleet Lite tiers with live Stripe billing and payment-triggered unlock.',
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
    desc: 'Cloud-hosted diagnostic command center with health matrix, live telemetry, scan history, and optional OpenAI analysis when an API key is configured.',
    screenshot: '/images/portfolio/pc-checker-extreme.png',
    detailPath: '/projects/pc-checker',
    highlights: [
      'Live CPU/RAM/disk telemetry, scan archive, and subsystem waveform charts in a command-center UI.',
      'WMI/winget/Windows Update diagnostics; optional OpenAI analysis for prioritized actions.',
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
      'Specwright Score dashboard tracks route health, doc/test coverage, spec freshness, and drift alerts.',
      'Grounded AI suite (OpenAI, Pro) — migration notes, breaking-change triage, scoped chat from AST context.',
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
      'Live Stripe Checkout, billing portal, and webhook-driven tier sync.',
      'Optional OpenAI for job-post parsing and outreach drafts; multi-client usage dashboards.',
    ],
  },
]

/** Drop dead URLs; keep all Railway live-demo links. */
export function withHealthyDemoUrl(project: PortfolioProject): PortfolioProject {
  if (!project.url || isLiveDemoUrlHealthy(project.url)) {
    return project
  }
  const { url: _removed, ...rest } = project
  return rest
}
