import { portfolioLiveUrls } from './portfolioLiveUrls'

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
    proves: 'E-commerce, checkout, and multi-currency storefronts',
    stack: 'Python 3.11, Django 5.2, DRF, React 18, TypeScript, PostgreSQL, GitHub Actions, Railway',
    desc: 'Capstone e-commerce platform (women\'s apparel, Kampala-based) — live production serving customers in East Africa and worldwide.',
    url: portfolioLiveUrls.kristieStore,
    highlights: [
      '11 user stories with acceptance criteria; full usability testing on production.',
      'Multi-currency checkout, mobile money flow, layered security, and GitHub Actions CI.',
    ],
  },
  {
    title: 'Django REST Blog API',
    proves: 'REST APIs, JWT auth, OAuth, and real-time features',
    stack: 'Python 3.11, Django 5.2, DRF, PostgreSQL, JWT, Channels, WebSockets, Gunicorn, Railway',
    desc: 'Production blog and portfolio platform with real-time notifications and full auth stack.',
    url: portfolioLiveUrls.blogApi,
    highlights: [
      'WebSocket new-post alerts, GitHub OAuth, JWT-gated REST API, and verified unittest coverage.',
    ],
  },
  {
    title: 'React Store Catalog',
    proves: 'Modern React SPAs with admin portals and automated QA',
    stack: 'React 19, TypeScript, Vite 7, Vitest, Framer Motion, Express, PostgreSQL, JWT',
    desc: 'Full-stack product catalog with admin portal, coupon management, and Vitest + Testing Library suite.',
    url: portfolioLiveUrls.reactStoreCatalog,
    highlights: [
      'Framer Motion UI, JWT admin backend, ARIA-verified interactions, and GitHub Actions CI on every push.',
    ],
  },
  {
    title: 'PC Checker Extreme',
    proves: 'Systems diagnostics, monitoring dashboards, and AI-assisted ops tooling',
    stack: 'Python, Django, WMI, winget, OpenAI, Railway',
    desc: 'Cloud-hosted diagnostic command center — health matrix, live telemetry, scan history, and AI-powered system analysis.',
    url: portfolioLiveUrls.pcCheckerExtreme,
    detailPath: '/projects/pc-checker',
    highlights: [
      'Live CPU/RAM/disk telemetry, scan archive, and subsystem waveform charts in a command-center UI.',
      'Deep WMI hardware ID, winget update sweep, Windows Update status, and optional OpenAI neural review.',
    ],
  },
  {
    title: 'RigHand AI',
    proves: 'Mobile-first SaaS, subscriptions, and offline-capable apps',
    stack: 'React, Flask, PostgreSQL, Capacitor, IndexedDB',
    desc: 'Expense and profit tracking for truck drivers — offline-first, subscriptions, GPS/OBD trip mileage, tax-ready exports.',
    url: portfolioLiveUrls.righandFrontend,
    highlights: [
      'Free/Pro/Fleet tiers, Capacitor Android app, and production deployment on Railway.',
    ],
  },
  {
    title: 'DBOps Control Center',
    proves: 'Enterprise DB tooling, RBAC, audit trails, and billing',
    stack: 'FastAPI, SQLAlchemy, Alembic, PostgreSQL, React, Vite, JWT, Docker Compose, Railway',
    desc: 'Production database operations platform — JWT + RBAC, whitelisted read-only SQL reports, incidents with audit history, scheduled delivery, OIDC SSO, and Stripe billing.',
    url: portfolioLiveUrls.dbopsWeb,
    highlights: [
      'DBA user lifecycle, execution audit trail, scheduled report delivery, and Docker Compose + Railway blueprint.',
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
]
