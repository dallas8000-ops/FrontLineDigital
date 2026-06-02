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
    stack: 'Python 3.11, Django 5.2, DRF, React 18, TypeScript, PostgreSQL, GitHub Actions, Render',
    desc: 'Capstone e-commerce platform (women\'s apparel, Kampala-based) — live production serving customers in East Africa and worldwide.',
    url: 'https://kristie-store.onrender.com',
    highlights: [
      '11 user stories with acceptance criteria; full usability testing on production.',
      'Multi-currency checkout, mobile money flow, layered security, and GitHub Actions CI.',
    ],
  },
  {
    title: 'Django REST Blog API',
    proves: 'REST APIs, JWT auth, OAuth, and real-time features',
    stack: 'Python 3.11, Django 5.2, DRF, PostgreSQL, JWT, Channels, WebSockets, Gunicorn, Render',
    desc: 'Production blog and portfolio platform with real-time notifications and full auth stack.',
    url: 'https://blog-2-hggg.onrender.com',
    highlights: [
      'WebSocket new-post alerts, GitHub OAuth, JWT-gated REST API, and verified unittest coverage.',
    ],
  },
  {
    title: 'React Store Catalog',
    proves: 'Modern React SPAs with admin portals and automated QA',
    stack: 'React 19, TypeScript, Vite 7, Vitest, Framer Motion, Express, PostgreSQL, JWT',
    desc: 'Full-stack product catalog with admin portal, coupon management, and Vitest + Testing Library suite.',
    url: 'https://react-store-catalog.onrender.com',
    highlights: [
      'Framer Motion UI, JWT admin backend, ARIA-verified interactions, and GitHub Actions CI on every push.',
    ],
  },
  {
    title: 'PC Checker',
    proves: 'Windows desktop tools, diagnostics, and local APIs',
    stack: 'Python, FastAPI, CustomTkinter, SQLite, PowerShell/WMI, Matplotlib, PyInstaller',
    desc: 'Windows health & diagnostics desktop app — 7-tab GUI, SharedState architecture, and local FastAPI + web dashboard.',
    detailPath: '/projects/pc-checker',
    highlights: [
      'Modular WMI/PowerShell collectors, SQLite metric history, JSON/HTML/PDF exports, and PyInstaller build.',
    ],
  },
  {
    title: 'RigHand AI',
    proves: 'Mobile-first SaaS, subscriptions, and offline-capable apps',
    stack: 'React, Flask, PostgreSQL, Capacitor, IndexedDB',
    desc: 'Expense and profit tracking for truck drivers — offline-first, subscriptions, GPS/OBD trip mileage, tax-ready exports.',
    url: 'https://righand.onrender.com',
    highlights: [
      'Free/Pro/Fleet tiers, Capacitor Android app, and production deployment on Render.',
    ],
  },
  {
    title: 'DBOps Control Center',
    proves: 'Enterprise DB tooling, RBAC, audit trails, and billing',
    stack: 'FastAPI, SQLAlchemy, Alembic, PostgreSQL, React, Vite, JWT, Docker Compose, Render',
    desc: 'Production database operations platform — JWT + RBAC, whitelisted read-only SQL reports, incidents with audit history, scheduled delivery, OIDC SSO, and Stripe billing on Render.',
    url: 'https://dbops-web.onrender.com',
    highlights: [
      'DBA user lifecycle, execution audit trail, scheduled report delivery, and Docker Compose + Render blueprint.',
    ],
  },
]
