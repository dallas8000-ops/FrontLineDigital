import { portfolioLiveUrls } from './portfolioLiveUrls'

export type CaseStudyFeature = {
  title: string
  body: string
}

export type CaseStudy = {
  slug: string
  title: string
  subtitle: string
  metaDescription: string
  liveUrl?: string
  problem: string
  solutionIntro: string
  features: CaseStudyFeature[]
  impact: string
  stack: string[]
  /** Licensable/subscription SaaS products get a different bottom CTA than the
   *  custom-build freelance service. Omit for freelance-style builds (default,
   *  unchanged behavior). */
  offerType?: 'license' | 'subscription' | 'freelance'
  /** Shown in the bottom CTA when offerType is 'license' or 'subscription'.
   *  Only set this with a real, verified price — never invent one. */
  pricingNote?: string
  /** CTA button label when offerType is 'license' or 'subscription'. */
  ctaLabel?: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ai-software-operations-studio',
    title: 'AI Software Operations Studio',
    subtitle: 'Unified Operations Workspace for SaaS Teams',
    metaDescription:
      'How I built AI Software Operations Studio as a protected Django and React workspace for managing software projects, quality evidence, Stripe configuration, and production deployments with encrypted per-project vaults.',
    liveUrl: portfolioLiveUrls.operationsStudio,
    problem:
      'Software teams struggle with fragmented operations: secrets scattered across local machines, deployment credentials in plain text, quality evidence buried in spreadsheets, and no unified view of project readiness. This fragmentation creates security risks, deployment failures, and wasted time on manual coordination.',
    solutionIntro:
      'AI Software Operations Studio is an operations control plane that provides account login and MFA, personal and organization workspaces with role-based access, an encrypted per-project vault, repository scanning, readiness and quality reporting, run history, guarded deployment preparation, provider migration workflows, billing, and operational reporting.',
    features: [
      {
        title: 'Encrypted Project Vault',
        body: 'AES-256-GCM encrypted vault stores secrets server-side, masked in API responses, and excluded from Git. Secrets are write-only from the browser and never exposed to frontend, AI, or logs.',
      },
      {
        title: 'Readiness & Quality Reporting',
        body: 'Specwright quality-evidence adapter and workflow/readiness surfaces provide project health scores, coverage metrics, and drift alerts across the portfolio.',
      },
      {
        title: 'Stripe & Billing Automation',
        body: 'Verify project Stripe credentials, provision supported Stripe catalog resources, generate integration code, monitor webhooks, run diagnostics, and manage Studio subscription billing with live Stripe checkout.',
      },
      {
        title: 'Guarded Deployment',
        body: 'Build readiness reports, generate deployment artifacts, prepare provider migrations, push approved Railway configuration, track pipeline runs, and use health, drift, webhook, backup, and recovery tools.',
      },
    ],
    impact:
      'Studio transforms fragmented operations into a unified control plane. Agencies can scan repos, wire billing, and push deploys without secrets leaving the server. Version 2.0 adds account-wide Operations Center for readiness, release, organization, and GitHub connectivity reporting.',
    stack: ['Django 5', 'DRF', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Celery', 'Stripe', 'Railway'],
    offerType: 'subscription',
    pricingNote: 'Team $149/mo, Agency $399/mo, or custom enterprise pricing.',
    ctaLabel: 'See plans & pricing',
  },
  {
    slug: 'ai-memory-engine',
    title: 'AI Memory Engine',
    subtitle: 'Persistent Semantic Memory for AI Workflows',
    metaDescription:
      'How I built AI Memory Engine as a local semantic memory system that stores facts and notes, then recalls them by meaning using Deep Lake vector storage, sentence-transformers embeddings, FastAPI REST API, and MCP integration.',
    liveUrl: portfolioLiveUrls.aiMemoryEngine,
    problem:
      'AI assistants lack persistent memory across sessions. Each conversation starts fresh, forcing models to re-derive findings. Without attribution and change tracking, teams cannot share knowledge or track who contributed what to the collective understanding.',
    solutionIntro:
      'AI Memory Engine stores facts and notes as embeddings, then recalls them by meaning rather than keywords. Storage is an append-only revision log so edits and deletes never overwrite data, and every write is attributed to the agent that made it with a change feed for sharing findings across assistants.',
    features: [
      {
        title: 'Append-Only Revision Log',
        body: 'Every write appends a row; nothing is ever mutated or rewritten. Edits append a new revision with the same ID, deletes append tombstones, and history remains recoverable through /memories/{id}/revisions.',
      },
      {
        title: 'Agent Attribution',
        body: 'Every write records who made it via X-Agent header. The change feed (GET /feed) replays the log so Claude, Cursor, and ChatGPT can share findings against one store instead of each re-deriving them.',
      },
      {
        title: 'Semantic Search',
        body: 'Store memories with duplicate-safe POST /memories, then search by meaning with GET /memories/search using vector similarity, tag filters, and score thresholds.',
      },
      {
        title: 'Crash Recovery',
        body: 'Write-ahead log (<dataset>.wal.jsonl) captures every write before storage. On startup, the store resets to the last good checkpoint, removes stale locks, and replays missing WAL rows.',
      },
    ],
    impact:
      'AI Memory Engine gives AI assistants persistent, attributable memory. Teams can share knowledge across Claude, Cursor, and ChatGPT through a single store. The append-only design ensures history survives edits and deletes while writes remain O(1) for performance.',
    stack: ['Python', 'FastAPI', 'Deep Lake', 'sentence-transformers', 'Uvicorn', 'MCP', 'Railway Volumes'],
    offerType: 'subscription',
    pricingNote: 'Free tier, then $49/mo or $199/mo for team-scale usage.',
    ctaLabel: 'See plans & pricing',
  },
  {
    slug: 'deployment-stripe-automation-center',
    title: 'Deployment & Stripe Automation Center',
    subtitle: 'Encrypted Vault + Stripe Automation for Agencies',
    metaDescription:
      'How I built Deployment & Stripe Automation Center as a combined platform for deployment/API transfer and Stripe setup — one login, one database, one encrypted vault per project with AES-256-GCM encryption.',
    liveUrl: portfolioLiveUrls.automationCenter,
    problem:
      'Agencies shipping client apps to production face a security nightmare: deployment credentials in plain text, Stripe keys scattered across projects, no centralized vault, and manual coordination between deployment and billing setup. This creates security risks, deployment failures, and wasted time.',
    solutionIntro:
      'Deployment & Stripe Automation Center merges deployment/API transfer and Stripe setup into a single Django + React app with one login, one database, and one encrypted vault per project. Secrets are stored with AES-256-GCM encryption, never exposed to frontend, AI, or logs.',
    features: [
      {
        title: 'AES-256-GCM Encrypted Vault',
        body: 'Project secrets are encrypted with scrypt + AES-GCM from VAULT_MASTER_KEY. Stored as write-only, masked in display, and never returned as plaintext through normal Studio APIs.',
      },
      {
        title: 'API Transfer Module',
        body: 'Railway/Render/Fly deploy, GitHub import, Render→Railway migration, audit log, and queue metrics with tamper-evident audit logging for all migration operations.',
      },
      {
        title: 'Stripe Diagnostics & Automation',
        body: 'Verify project Stripe credentials, provision supported Stripe catalog resources, generate integration code, monitor webhooks, run diagnostics, and manage billing with live Stripe checkout.',
      },
      {
        title: 'Agency & RBAC',
        body: 'Organizations, RBAC, email invites (register link → auto-join), shared projects, GitHub App install flow with webhook for PR readiness checks and optional check runs.',
      },
    ],
    impact:
      'The platform replaces fragmented deployment and Stripe setup with a unified, secure control plane. Agencies can scan repos, wire billing, and push deploys without secrets leaving the server. The encrypted vault ensures production credentials never touch local machines or logs.',
    stack: ['Python', 'Django', 'React', 'TypeScript', 'AES-256-GCM vault', 'WebSockets', 'Celery', 'Railway'],
    offerType: 'license',
    pricingNote: 'License tiers from $6,000–$15,000, plus $500–$1,200/mo support — built for agencies running multiple client deployments.',
    ctaLabel: 'Request licensing details',
  },
  {
    slug: 'elite-fintech',
    title: 'Elite Fintech Systems',
    subtitle: 'Multi-Tenant Billing for East African Fintech',
    metaDescription:
      'How I built Elite Fintech Systems as a production-oriented multi-tenant billing platform for East African fintech teams with daily FX-based local pricing, real-time billing events, and mobile-money-first routing.',
    liveUrl: portfolioLiveUrls.eliteFintech,
    problem:
      'Most billing products are card-first and US-centric. East African fintech teams need mobile money rails, local compliance context, and currency-aware pricing for Uganda, Kenya, Rwanda, and Tanzania. Existing solutions don\'t address regional payment realities or FX volatility.',
    solutionIntro:
      'Elite Fintech Systems is designed for PSPs and fintech startups serving East Africa with multi-tenant organizations with role-based access, JWT authentication, country-aware onboarding, billing plans with daily FX conversion from USD anchors to local currencies, and mobile-money-first routing.',
    features: [
      {
        title: 'Daily FX Pricing Engine',
        body: 'Pricing is anchored in USD and converted daily to local market currencies (UGX/KES/RWF/TZS) via stored snapshots with VAT-inclusive local pricing output served to frontend.',
      },
      {
        title: 'Multi-Tenant RBAC',
        body: 'JWT authentication with organization-aware flows and role-based access (OWNER, ADMIN, MEMBER, VIEWER) for wallet and payment teams that need org-based RBAC and auditability.',
      },
      {
        title: 'Real-Time Billing Feed',
        body: 'Django Channels WebSocket endpoint provides real-time billing and payment activity feed for live updates on payment events and subscription changes.',
      },
      {
        title: 'Mobile-Money-First Routing',
        body: 'Flutterwave v4 OAuth for EA primary with hosted checkout, MoMo charges, and webhooks. Stripe serves as optional fallback for international or Euro-linked card flows.',
      },
    ],
    impact:
      'Elite Fintech Systems provides regional fintech teams with a billing platform designed for East African realities. Daily FX conversion ensures pricing reflects market conditions, mobile-money-first routing matches local payment preferences, and multi-tenant RBAC supports organizational scale.',
    stack: ['Django 5', 'DRF', 'React 19', 'TypeScript', 'Tailwind', 'PostgreSQL', 'JWT', 'Django Channels', 'Docker Compose', 'Railway'],
  },
  {
    slug: 'eastbridge',
    title: 'EastBridge Ops Intelligence',
    subtitle: 'Navigating the EU-Africa Regulatory Gap',
    metaDescription:
      'How I engineered a regulatory compliance and trade intelligence platform for EU companies entering Uganda, Kenya, and Rwanda — built on Django 5, React 19, and pgvector.',
    liveUrl: portfolioLiveUrls.eastbridge,
    problem:
      'European companies expanding into the East African Community (EAC) face a "transparency tax." Regulatory intelligence is often fragmented, siloed in government offices, or buried in non-digitized documents. This uncertainty creates significant compliance risks and delays market entry for months.',
    solutionIntro:
      "I engineered EastBridge to serve as a high-fidelity intelligence layer for trade operations. It isn't just a database; it is a regulatory automation tool built on a modern stack (Django 5, React 19, and pgvector) designed to surface critical compliance data in real-time.",
    features: [
      {
        title: 'Intelligent Search',
        body: 'Leverages vector similarity search to find relevant trade laws across multiple jurisdictions.',
      },
      {
        title: 'Compliance Tracking',
        body: 'Automated monitoring of regulatory changes that affect cross-border logistics.',
      },
      {
        title: 'Audit-Ready Reports',
        body: 'Generates professional trade compliance documentation for internal and external stakeholders.',
      },
    ],
    impact:
      'EastBridge transforms weeks of manual legal and operational research into a searchable, actionable dashboard. By providing "ground-truth" data, it allows EU trade directors to make expansion decisions with the same level of confidence they have in their home markets.',
    stack: ['Django 5', 'DRF', 'React 19', 'TypeScript', 'PostgreSQL', 'pgvector', 'OpenAI', 'Railway'],
    offerType: 'license',
    pricingNote: 'License tiers from $12,000–$30,000/yr per organization, plus onboarding for jurisdiction coverage.',
    ctaLabel: 'Request licensing details',
  },
  {
    slug: 'agripay',
    title: 'AgriPay Logistics AI',
    subtitle: 'Modernizing Agricultural Supply Chains',
    metaDescription:
      'How I built AgriPay to digitize farm-gate payments in East Africa — MTN MoMo, Airtel Money, live Stripe billing, and real-time logistics tracking for Ugandan and Kenyan agriculture.',
    liveUrl: portfolioLiveUrls.agripayLogistics,
    problem:
      'The "Last Mile" of agricultural logistics in East Africa is often a financial black hole. Smallholder farmers and buyers rely on manual ledger books and cash-heavy transactions, leading to payment delays, lost records, and a lack of transparency that prevents farmers from accessing credit.',
    solutionIntro:
      'AgriPay was built to digitize the flow of goods and money from farm-gate to warehouse. It integrates production-grade engineering with local payment realities, specifically targeting the unique needs of the Ugandan and Kenyan agricultural sectors.',
    features: [
      {
        title: 'Mobile Money Integration',
        body: 'Native support for MTN MoMo and Airtel Money, ensuring farmers are paid instantly upon delivery.',
      },
      {
        title: 'Logistics Tracking',
        body: 'Real-time monitoring of produce movement, reducing spoilage and "lost" inventory.',
      },
      {
        title: 'Financial Identity',
        body: 'Every transaction builds a digital credit history for farmers who are otherwise unbanked.',
      },
    ],
    impact:
      'By moving from paper to AgriPay, logistics managers gain 100% visibility into their cash flow and inventory. For farmers, it means faster payments and a verifiable financial record. It is a bridge that connects traditional agriculture to the modern digital economy.',
    stack: ['Django 5', 'DRF', 'React', 'TypeScript', 'PostgreSQL', 'Stripe', 'MTN MoMo', 'Railway'],
  },
  {
    slug: 'dbops',
    title: 'DBOps Control Center',
    subtitle: 'Hardening Enterprise Database Infrastructure',
    metaDescription:
      'How I engineered DBOps Control Center to replace fragmented local database tools with a single secure portal — granular RBAC, tamper-proof audit trails, and AES-256-GCM encrypted secrets on FastAPI and React.',
    liveUrl: portfolioLiveUrls.dbopsWeb,
    problem:
      'Modern development teams often struggle with "Database Sprawl," where sensitive production data is accessed through fragmented tools and insecure local connections. This lack of centralized governance leads to unauthorized access risks, accidentally dropped tables, and zero visibility into who changed what in the production environment.',
    solutionIntro:
      'I engineered DBOps Control Center to be the definitive security and operations layer for enterprise databases. It centralizes control while enabling developer speed, built with a secure-by-default architecture (FastAPI, React, and Vite).',
    features: [
      {
        title: 'Granular RBAC',
        body: 'Role-Based Access Control ensures that developers get only the permissions they need for their specific tasks.',
      },
      {
        title: 'Audit Trails',
        body: 'Every query and configuration change is logged in a tamper-proof audit trail for compliance and forensic review.',
      },
      {
        title: 'Encrypted Secrets',
        body: 'Sensitive credentials never touch local machines, managed instead through a production-grade AES-256-GCM vault.',
      },
    ],
    impact:
      'DBOps replaces the "Wild West" of local database tools with a single, audited, and secure portal. It gives CTOs and security leads the confidence that their data infrastructure is protected, while providing engineers with a fast and intuitive interface for their daily operations.',
    stack: ['FastAPI', 'SQLAlchemy', 'Alembic', 'PostgreSQL', 'React', 'Vite', 'JWT', 'Stripe', 'Railway'],
    offerType: 'license',
    pricingNote: 'License tiers from $8,000–$20,000, plus $800–$2,500/mo support — not an hourly build.',
    ctaLabel: 'Request licensing details',
  },
  {
    slug: 'righand',
    title: 'RigHand AI',
    subtitle: 'High-Resilience Software for Fleet Safety & Compliance',
    metaDescription:
      'How I built RigHand AI for Uganda transit operations — offline-first HOS tracking, GPS and OBD-II logging, and compliance workflows designed for regional logistics bottlenecks in the EAC.',
    liveUrl: portfolioLiveUrls.righandFrontend,
    problem:
      'Uganda transit operations face a compounding crisis: driver fatigue on the Gulu Highway, broken-down trucks creating secondary collisions, and tightening URA/NTSA compliance requirements that demand digital proof of load control and rest periods. In low-connectivity border corridors like Malaba and Busia, critical fleet data cannot depend on constant internet access.',
    solutionIntro:
      'RigHand AI is designed as high-resilience software for emerging logistics environments. It works offline, uses native device data where available, and focuses on the specific bottlenecks that matter most to operators: Hours of Service compliance, mechanical reliability, and cross-border documentation.',
    features: [
      {
        title: 'HOS Countdown Lite',
        body: 'Tracks rest cycles and remaining drive time to reduce fatigue-driven crashes and support more defensible compliance practices.',
      },
      {
        title: 'UG Jurisdiction Pack',
        body: 'Helps operators align with regional and national rule sets, including load-control and customs documentation workflows relevant to Uganda and the EAC.',
      },
      {
        title: 'Maintenance Prompts',
        body: 'Flags recurring vehicle issues before breakdowns escalate into secondary incidents on high-risk routes.',
      },
      {
        title: 'Offline-First Mobile Records',
        body: 'Lets drivers capture trip, expense, and load data even in low-connectivity border and highway conditions, then sync when connectivity returns.',
      },
    ],
    impact:
      'RigHand AI is not just an expense tracker; it is a safety and compliance infrastructure layer. For fleet operators in Uganda and the broader EAC, it turns fragmented recordkeeping into a practical operating system for fatigue control, equipment reliability, and regulatory proof.',
    stack: ['Capacitor', 'React', 'TypeScript', 'IndexedDB', 'GPS', 'OBD-II', 'PostgreSQL', 'Stripe', 'Railway'],
    offerType: 'subscription',
    pricingNote: 'Free tier, Compliance Pro $34.99/mo, Fleet Lite $89/mo.',
    ctaLabel: 'See plans & pricing',
  },
  {
    slug: 'kistie-store',
    title: 'Kistie Store',
    subtitle: 'E-Commerce Platform for Kampala Fashion',
    metaDescription:
      'How I built Kistie Store as a live women\'s fashion ecommerce platform with curated imported brands from Turkey, the UK, and the USA, shipping from Kampala to customers worldwide with Django 5.2 storefront and DRF JSON API.',
    liveUrl: portfolioLiveUrls.kistieStore,
    problem:
      'Kampala-based fashion retailers need a production-ready ecommerce platform that serves both local and international customers. The platform must handle EU sizing, multi-currency pricing, payment integration with local providers like Pesapal and mobile money options, and provide staff operations tooling for inventory and order management.',
    solutionIntro:
      'Kistie Store is a live Django 5.2 storefront with staff tooling and DRF JSON API on Railway/PostgreSQL. Shoppers browse a single Shop page with filters, EU sizing, currency choices, product quick-view modal, and add to cart. Operations include custom-theme Django admin, staff dashboard, audit log, and public-read/staff-only-write JSON API.',
    features: [
      {
        title: 'Single Shop Page',
        body: 'The only customer-facing browse-and-buy surface with filters (category, price), EU sizing, currency & payment choices, product quick-view modal, and add to cart. Opening / redirects straight to /shop/.',
      },
      {
        title: 'Multi-Currency & Payment',
        body: 'Online checkout supports Pesapal gateway redirect for automated payment handoff, while MTN/Airtel/WorldRemit remain available as guided payment options with staff verification.',
      },
      {
        title: 'Staff Operations',
        body: 'Custom-theme Django admin, staff dashboard with orders snapshot and low-stock alerts, audit log for superusers, and permission-gated access controls.',
      },
      {
        title: 'AI Shopping Assistant',
        body: 'AI shopping assistant end-to-end (/api/chat/ + shop chatbot UI), size assistance (quick-view /api/size-recommend/), fit recommendation (/api/fit-recommend/), and staff AI description generator.',
      },
    ],
    impact:
      'Kistie Store provides Kampala fashion retailers with a production ecommerce platform that handles both local and international customers. The Django SSR storefront ensures SEO and security, while the DRF API enables integrations. Staff tooling provides complete inventory and order management capabilities.',
    stack: ['Python 3.11', 'Django 5.2', 'DRF', 'React 18', 'TypeScript', 'PostgreSQL', 'GitHub Actions', 'Railway'],
  },
  {
    slug: 'silverfox',
    title: 'SilverFox',
    subtitle: 'Premium Men\'s Fashion E-Commerce',
    metaDescription:
      'How I built SilverFox as a production men\'s fashion storefront with Django 5.2 server-rendered shop, staff operations tooling, DRF JSON API, and 128-product catalog with multi-currency pricing on Railway.',
    liveUrl: portfolioLiveUrls.silverfox,
    problem:
      'Men\'s fashion retailers need a production e-commerce platform with catalog integrity, multi-currency support for EUR/USD/UGX/KES, and staff operations tooling. The platform must handle 128+ products across categories with per-product image mapping and live exchange rate refresh.',
    solutionIntro:
      'SilverFox is a live e-commerce site for men\'s apparel and accessories with a single Shop page for browsing, filtering by category and price, multi-currency display with prices refreshed from live exchange rates, cart and checkout, and staff dashboard for orders, low-stock alerts, and customer inquiries.',
    features: [
      {
        title: '128-Product Catalog',
        body: '128 seeded products — 16 per category across 8 men\'s categories — each image matched to its product by keyword rules (e.g. sunglasses → aviator image, boots → footwear image).',
      },
      {
        title: 'Multi-Currency Pricing',
        body: 'Multi-currency display (EUR / USD / UGX / KES) with prices refreshed from live exchange rates. Staff can trigger Sync catalog & FX rates from /staff/dashboard/.',
      },
      {
        title: 'Staff Operations',
        body: 'Staff dashboard with orders snapshot, low-stock alerts, recent inquiries (permission-gated), superuser audit log, and one-click Sync catalog & FX rates to repair product images and refresh currency conversions.',
      },
      {
        title: 'Django SSR + DRF API',
        body: 'Django 5.2 server-rendered shop for the live path (SEO, sessions, security) and DRF exposes JSON for integrations mounted under /api/inventory/ as a URL prefix.',
      },
    ],
    impact:
      'SilverFox provides men\'s fashion retailers with a production e-commerce platform that mirrors the architecture of Kistie-Store but is built for menswear. The 128-product catalog with integrity sync and live FX pricing ensures accurate inventory management and regional pricing.',
    stack: ['Python 3.11', 'Django 5.2', 'DRF', 'PostgreSQL', 'WhiteNoise', 'Gunicorn', 'Railway'],
  },
  {
    slug: 'react-store-catalog',
    title: 'React Store Catalog',
    subtitle: 'Modern React SPA with Admin Portal',
    metaDescription:
      'How I built React Store Catalog as an interactive product catalog with React 19, Vite 7, Framer Motion, and Express + PostgreSQL API with JWT admin backend, coupon management, and Vitest + Testing Library suite.',
    liveUrl: portfolioLiveUrls.reactStoreCatalog,
    problem:
      'Product catalogs need modern UI with smooth animations, inline editing, and admin capabilities. Traditional static catalogs lack interactivity, while full CMS solutions are overkill for teams that need a simple catalog with admin portal and automated QA.',
    solutionIntro:
      'React Store Catalog is an interactive product catalog with React 19 + Vite, date grouping, staggered motion, detail modal, and edit catalog mode. A separate Express + PostgreSQL API adds production-style admin and optional live product data with JWT authentication.',
    features: [
      {
        title: 'React 19 + Vite 7',
        body: 'Modern React SPA with Framer Motion UI, staggered animations, detail modal with Escape/arrow keys, and ✎ Edit Catalog for in-session edits.',
      },
      {
        title: 'Express + PostgreSQL API',
        body: 'JWT login to the API, coupons and products persisted in Postgres, and GET /api/images reads public/images on each request so new uploads show up without rebuilding.',
      },
      {
        title: 'Admin Portal',
        body: 'JWT login to the API with admin dashboard for coupons and products management. The public catalog loads with or without the API (falls back to bundled product list).',
      },
      {
        title: 'Automated QA',
        body: 'Vitest + Testing Library suite with GitHub Actions CI on every push. Framer Motion UI, JWT admin backend, ARIA-verified interactions, and build checks.',
      },
    ],
    impact:
      'React Store Catalog provides a modern React SPA with smooth animations and admin capabilities. The API-backed admin portal enables production-style management while the public catalog gracefully degrades without the API, ensuring reliability.',
    stack: ['React 19', 'TypeScript', 'Vite 7', 'Vitest', 'Framer Motion', 'Express', 'PostgreSQL', 'JWT', 'Railway'],
  },
  {
    slug: 'pc-checker-extreme',
    title: 'PC Checker Extreme',
    subtitle: 'AI-Powered Windows System Diagnostics',
    metaDescription:
      'How I built PC Checker Extreme as an AI-powered Windows PC diagnostics tool with Django, WMI hardware scanning, winget software updates, and OpenAI-powered component reviews with prioritized suggestions.',
    liveUrl: portfolioLiveUrls.pcCheckerExtreme,
    problem:
      'Windows users lack a unified diagnostics command center that combines hardware information, software inventory, update status, and AI-powered analysis. Existing tools are fragmented, require multiple utilities, or lack intelligent prioritization of issues.',
    solutionIntro:
      'PC Checker Extreme scans hardware by manufacturer (WMI), checks system health, finds outdated applications via winget, and generates an interactive AI review with prioritized suggestions. It provides a command-center UI with health matrix, live telemetry, scan history, and optional OpenAI analysis.',
    features: [
      {
        title: 'Hardware & System Scanning',
        body: 'Windows system information via WMI/CIM (CPU, GPU, RAM, storage, motherboard, BIOS), hardware identification by manufacturer, health checks (memory, disk space, pending updates, uptime), SMART disk health, temperatures, and security posture.',
      },
      {
        title: 'Software & Updates',
        body: 'Software inventory from registry, outdated apps via winget upgrade parsing, Windows updates via Windows Update API, driver update links, duplicate driver flags, and copy-ready winget commands.',
      },
      {
        title: 'AI Analysis',
        body: 'OpenAI-powered component reviews, priority actions, upgrade suggestions, expandable interactive sections (plain-English summary, fix-this steps, upgrade advisor), and scan chat to ask questions about completed reports.',
      },
      {
        title: 'Tools & Reporting',
        body: 'Command playbook (SFC, DISM, winget, disk cleanup), bottleneck analysis, driver gap report, Update Catalog links, compare scans at /compare/, export HTML/PDF, scan history, and scheduled scan support.',
      },
    ],
    impact:
      'PC Checker Extreme provides a unified diagnostics command center for Windows systems. The AI-powered analysis prioritizes issues and provides actionable steps, while the comprehensive hardware and software scanning gives complete system visibility.',
    stack: ['Python', 'Django', 'WMI', 'winget', 'OpenAI', 'Railway'],
  },
  {
    slug: 'specwright',
    title: 'Specwright',
    subtitle: 'AST-Based API Documentation & Test Generation',
    metaDescription:
      'How I built Specwright as the documentation layer for FastAPI and Django teams that reads codebase through AST analysis and keeps OpenAPI specs, pytest scaffolds, and ER diagrams aligned with actual routes and models.',
    liveUrl: portfolioLiveUrls.specwrightWeb,
    problem:
      'API teams struggle with documentation drift: docs fall out of sync after every PR, no visibility across repos, reviewers miss API changes, and CI ships stale specs. Swagger, Redoc, and Postman assume manual maintenance, leading to silent divergence between code and documentation.',
    solutionIntro:
      'Specwright reads your codebase through AST analysis — not guesswork — and keeps OpenAPI, a markdown API reference, pytest scaffolds, and ER diagrams aligned with your actual routes and models. It attaches to the repo and rewrites artifacts on every scan or on save.',
    features: [
      {
        title: 'AST-Based Analysis',
        body: 'Reads codebase through AST analysis for deterministic scan/score/CI. Routes from the last scan are used for all features — unknown paths are rejected or flagged.',
      },
      {
        title: 'Specwright Score',
        body: 'Weighted health metric (0–100) based on API docs, test coverage, spec freshness, and model docs. Route health dashboard shows method badges, coverage labels, metric cards, and action banners.',
      },
      {
        title: 'Team Dashboard',
        body: 'Multi-repo view for tech leads and EMs overseeing 3–8 codebases with project count, avg Specwright Score, avg doc/test coverage, drifted-this-week, sortable table, and weekly average score trend.',
      },
      {
        title: 'Grounded AI Suite (Pro)',
        body: 'Description fill, migration notes, test bodies, scoped chat, and AI polish. Every feature uses routes from the last scan — unknown paths are rejected or flagged. Auto-on-scan fills weak OpenAPI descriptions from docstrings.',
      },
    ],
    impact:
      'Specwright eliminates documentation drift by automatically syncing OpenAPI specs, markdown docs, and pytest scaffolds with code. The team dashboard provides visibility across repos, while the Specwright Score gives a clear health metric for API documentation quality.',
    stack: ['FastAPI', 'Python 3.11', 'React 18', 'TypeScript', 'Vite', 'SQLite', 'OpenAI', 'Stripe', 'Railway'],
    offerType: 'subscription',
    pricingNote: '$29/mo or $79/mo, billed monthly.',
    ctaLabel: 'See plans & pricing',
  },
  {
    slug: 'enpowercommand',
    title: 'EnPower Command',
    subtitle: 'Freelance Command Center for Lead Management',
    metaDescription:
      'How I built EnPower Command as a freelance command center with React (Vite), Express (TypeScript), PostgreSQL, and optional OpenAI for parsing job postings and generating outreach drafts.',
    liveUrl: portfolioLiveUrls.enPowerCommand,
    problem:
      'Freelancers and job seekers need a centralized system to manage leads, track job postings, store resume profiles, and generate outreach drafts. Scattered spreadsheets and manual tracking lead to missed opportunities and inefficient follow-up processes.',
    solutionIntro:
      'EnPower Command is a freelance command center for saving leads, pasting job postings to create leads (optional AI parsing), storing a resume profile, and generating outreach drafts. It includes activity logging, CSV export, and single admin login with JWT authentication.',
    features: [
      {
        title: 'Lead Management',
        body: 'Save leads with company, role, URL, notes, stage, and last contact date. Activity log provides per-lead timeline (notes, contacted, applied, interview, follow-up) with automatic last contact updates.',
      },
      {
        title: 'Job Posting Import',
        body: 'Paste listing text to create a lead via POST /api/leads/from-posting. With OPENAI_API_KEY, fields are extracted; without it, the full paste is stored in notes for manual cleanup.',
      },
      {
        title: 'Profile & Outreach',
        body: 'Store resume/profile on the server with one-time migration from browser storage. Generate outreach drafts with subject lines that send profile context when set, with copy-all on the lead editor.',
      },
      {
        title: 'Export & Authentication',
        body: 'Leads and activity CSV export from the Leads page. Single admin password + JWT when AUTH_SECRET and ADMIN_PASSWORD are set, with SKIP_AUTH option for local development.',
      },
    ],
    impact:
      'EnPower Command provides freelancers with a centralized lead management system. The AI-powered job posting parsing and outreach generation save time, while the activity logging and CSV export create a complete job-search paper trail.',
    stack: ['Node.js', 'Express', 'React', 'TypeScript', 'PostgreSQL', 'Stripe', 'Railway'],
  },
  {
    slug: 'digital-sales-automation-center',
    title: 'Digital Sales Automation Center',
    subtitle: 'Sales Operations Dashboard for Lead Management',
    metaDescription:
      'How I built Digital Sales Automation Center as a Django and static-frontend sales operations workspace for prospect intake, CRM workflows, campaign support, subscription operations, and automation controls.',
    liveUrl: portfolioLiveUrls.digitalSalesAutomationCenter,
    problem:
      'Sales teams need a unified operations workspace for prospect intake, CRM workflows, campaign management, and subscription operations. Fragmented tools and manual processes lead to lost leads, inconsistent follow-up, and inefficient pipeline management.',
    solutionIntro:
      'Digital Sales Automation Center is a Django and static-frontend sales operations workspace for prospect intake, CRM workflows, campaign support, subscription operations, and automation controls with API endpoints for prospects, email jobs, AI automation, and sales package assets.',
    features: [
      {
        title: 'Prospect Management',
        body: 'API endpoints for prospect creation, querying, export, and possible clients. Data integrity policy enforces verification prerequisites with company and email required, and HUNTER_API_KEY for validation-enabled ingest.',
      },
      {
        title: 'Email Jobs & Automation',
        body: 'Email job processing endpoints, AI automation status/settings/run controls, and pipeline recommendations for automated outreach and follow-up sequences.',
      },
      {
        title: 'Sales Package Assets',
        body: 'Sales package calendar, sequence, and asset management endpoints for organizing campaign materials and outreach schedules.',
      },
      {
        title: 'Security & Validation',
        body: 'Admin-facing endpoints require X-API-Key header authentication. Synthetic bulk prospect generation path removed to ensure data integrity. Single-runtime guard prevents conflicting backend stacks.',
      },
    ],
    impact:
      'Digital Sales Automation Center provides sales teams with a unified operations workspace. The API-driven architecture enables automation while the security controls ensure data integrity. The platform supports prospect intake, CRM workflows, and subscription operations in one system.',
    stack: ['Node.js', 'Express', 'Vanilla JS', 'Stripe', 'PostgreSQL/JSON', 'Railway'],
    offerType: 'license',
    pricingNote: 'Deployed as a licensed sales-ops platform — tell me your team size and I\'ll send pricing.',
    ctaLabel: 'Request licensing details',
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug)
}
