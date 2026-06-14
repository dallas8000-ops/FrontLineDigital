import { isLiveDemoUrlHealthy, portfolioLiveUrls } from './portfolioLiveUrls'

export type PortfolioProject = {
  title: string
  stack: string
  desc: string
  /** One line: what this live app proves you can build for a client */
  proves?: string
  url?: string
  detailPath?: string
  highlights?: string[]
}

export const defaultPortfolioProjects: PortfolioProject[] = [
  {
    title: 'Kristie Store',
    url: portfolioLiveUrls.kristieStore,
    proves: 'E-commerce, checkout, and multi-currency storefronts',
    stack: 'Python 3.11, Django 5.2, DRF, React 18, TypeScript, PostgreSQL, GitHub Actions, Railway',
    desc: 'Capstone e-commerce platform (women\'s apparel, Kampala-based) — production architecture for East Africa and worldwide checkout.',
    highlights: [
      '11 user stories with acceptance criteria; full usability testing on production.',
      'Multi-currency checkout, mobile money flow, layered security, and GitHub Actions CI.',
    ],
  },
  {
    title: 'Django REST Blog API',
    url: portfolioLiveUrls.blogApi,
    proves: 'REST APIs, JWT auth, OAuth, and real-time features',
    stack: 'Python 3.11, Django 5.2, DRF, PostgreSQL, JWT, Channels, WebSockets, Gunicorn, Railway',
    desc: 'Production blog and portfolio platform with real-time notifications and full auth stack.',
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
    highlights: [
      'Framer Motion UI, JWT admin backend, ARIA-verified interactions, and GitHub Actions CI on every push.',
    ],
  },
  {
    title: 'PC Checker Extreme',
    url: portfolioLiveUrls.pcCheckerExtreme,
    proves: 'Systems diagnostics, monitoring dashboards, and AI-assisted ops tooling',
    stack: 'Python, Django, WMI, winget, OpenAI, Railway',
    desc: 'Cloud-hosted diagnostic command center — health matrix, live telemetry, scan history, and AI-powered system analysis.',
    detailPath: '/projects/pc-checker',
    highlights: [
      'Live CPU/RAM/disk telemetry, scan archive, and subsystem waveform charts in a command-center UI.',
      'Deep WMI hardware ID, winget update sweep, Windows Update status, and optional OpenAI neural review.',
    ],
  },
  {
    title: 'RigHand AI',
    proves: 'Mobile-first SaaS, subscriptions, and offline-capable apps',
    stack: 'React, Django, PostgreSQL, Capacitor, Stripe, Railway',
    desc: 'Expense and profit tracking for truck drivers — offline-first, subscriptions, GPS/OBD trip mileage, tax-ready exports.',
    url: portfolioLiveUrls.righandFrontend,
    highlights: [
      'Free/Pro/Fleet tiers with Stripe billing, Capacitor Android app, and Railway deployment.',
      'Offline-first IndexedDB sync, GPS mileage tracking, and tax-ready CSV/PDF exports.',
    ],
  },
  {
    title: 'DBOps Control Center',
    proves: 'Enterprise DB tooling, RBAC, audit trails, and billing',
    stack: 'FastAPI, SQLAlchemy, Alembic, PostgreSQL, React, Vite, JWT, Stripe, Railway',
    desc: 'Production database operations platform — JWT + RBAC, whitelisted read-only SQL reports, incidents with audit history, scheduled delivery, OIDC SSO, and Stripe billing.',
    url: portfolioLiveUrls.dbopsWeb,
    highlights: [
      'DBA user lifecycle, execution audit trail, scheduled report delivery, and Stripe subscription billing.',
      'Multi-tenant RBAC, OIDC SSO, and Railway deployment with PostgreSQL.',
    ],
  },
  {
    title: 'Specwright',
    proves: 'AST-based API documentation, test scaffolding, and developer tooling',
    stack: 'FastAPI, Python 3.11, React 18, TypeScript, Vite, SQLite, OpenAI, Stripe, Railway',
    desc: 'The documentation layer for FastAPI teams — automatically. Reads your codebase via AST analysis and keeps OpenAPI specs, pytest scaffolds, and ER diagrams in sync with your routes and models. Includes Specwright Score (0–100), team dashboard, watch mode, PR-aware diffing, and Grounded AI.',
    url: portfolioLiveUrls.specwrightWeb,
    highlights: [
      'Specwright Score dashboard — per-route health, doc/test coverage, spec freshness, and drift alerts across all repos.',
      'Grounded AI suite (Pro): description fill, migration notes, breaking-change triage, and scoped chat — all AST-locked, no hallucinated routes.',
    ],
  },
  {
    title: 'API Transfer',
    proves: 'API migration tooling, codebase diagnostics, and multi-platform deployment',
    stack: 'Python, Django, DRF, React, TypeScript, PostgreSQL, Stripe, Railway',
    desc: 'Automated API migration and transfer platform — scans codebases for config drift, provisions cloud environments, and migrates API configs between hosting platforms with zero manual steps.',
    url: portfolioLiveUrls.apiTransfer,
    highlights: [
      'Codebase scanner auto-detects framework, secrets, and Stripe webhook paths.',
      'One-click migration between cloud hosts with env var sync and webhook re-registration.',
    ],
  },
  {
    title: 'EnPowerCommand',
    proves: 'Utility billing SaaS, subscription management, and client dashboards',
    stack: 'Node.js, Express, React, TypeScript, PostgreSQL, Stripe, Railway',
    desc: 'Energy and utility billing command center — subscription tiers, usage tracking, client-facing dashboards, and automated billing with Stripe Checkout and the Customer Portal.',
    url: portfolioLiveUrls.enPowerCommand,
    highlights: [
      'Live subscription management with Stripe Checkout, billing portal, and webhook-driven tier sync.',
      'Multi-client dashboard with usage analytics and automated invoice generation.',
    ],
  },
  {
    title: 'Stripe Installer',
    proves: 'Developer tooling, encrypted secrets management, and AI-assisted automation',
    stack: 'Python, Django, React, TypeScript, AES-256-GCM vault, WebSockets, Celery, Railway',
    desc: 'Production-grade Stripe setup tool for agencies — encrypted vault stores keys, live pipeline streams events via WebSocket, AI copilot diagnoses and fixes misconfigs, and codegen produces SDK-ready integration files.',
    url: portfolioLiveUrls.stripeInstaller,
    highlights: [
      'AES-256-GCM encrypted vault — secrets never exposed to AI, logs, or the frontend.',
      'Readiness score (0–100), webhook path auto-detection, and one-click deploy prep for Railway.',
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
