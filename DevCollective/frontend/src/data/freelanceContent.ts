import { defaultProfile } from './resumeContent'

export const business = {
  name: 'Gilliom Frontline Digital',
  owner: defaultProfile.profileName,
  tagline: 'Internal Tools & Operations Dashboards | Secure, Audited, Production-Ready',
  location: 'Tampa, FL | Remote — available for new projects',
  heroHeadline: 'Secure internal tools and ops dashboards — live, audited, and payment-ready.',
  heroSubhead:
    'I build multi-tenant SaaS with RBAC, audit trails, live Stripe billing, and PostgreSQL-backed reporting — then deploy it on Railway with CI and tests. Thirteen products below are live demos you can open today; the stack underneath is the proof.',
  portfolioSectionTitle: '13 live products you can try right now',
  portfolioSectionLead:
    'Each card is a deployed app on Railway — open the demo, read the stack, inspect GitHub where published. Live Stripe webhooks, JWT + RBAC, and honest status (shipped vs. sandbox vs. in progress) match what the repos document.',
  valueProps: [
    {
      title: 'Ops dashboards clients buy',
      description:
        'Role-based access, audit history, whitelisted SQL reporting, incident workflows, and scheduled delivery — built so ops teams stop living in spreadsheets.',
    },
    {
      title: 'Payments that are labeled honestly',
      description:
        'Live Stripe checkout and subscription webhooks on production keys. Mobile-money integrations documented as sandbox-verified until live credentials are configured.',
    },
    {
      title: 'AI where it is configured',
      description:
        'OpenAI-backed assistants and parsers in AgriPay, EastBridge, Specwright, PC Checker, and EnPowerCommand — key-gated, optional, and scoped to indexed or AST-locked context.',
    },
    {
      title: 'Database operations platforms',
      description:
        'FastAPI and Django services with PostgreSQL, Alembic migrations, JWT auth, and DBOps-style incident and audit patterns you can demo today.',
    },
    {
      title: 'Full-stack production pattern',
      description:
        'React + TypeScript front ends, Django or FastAPI APIs, PostgreSQL, Docker, GitHub Actions CI — repeated across DBOps, Elite Fintech, Deployment & Stripe, and more.',
    },
    {
      title: 'Railway production hosting',
      description:
        'All portfolio demos run on Railway (*.up.railway.app). Docker, GitHub Actions, and environment management on every repo I ship.',
    },
  ],
  credentials: [
    { stat: '13', label: 'Live products — open any demo below' },
    { stat: 'Live Stripe', label: 'Production billing on portfolio apps' },
    { stat: 'Django + FastAPI', label: 'Proven in deployed demos' },
    { stat: 'Railway', label: 'Exclusive hosting for my demos' },
  ],
  metrics: [
    '13 live Railway demos — Django, FastAPI, React, TypeScript, PostgreSQL',
    'Live Stripe payments + webhooks on production keys',
    'JWT, RBAC, audit trails, and multi-tenant patterns in shipped apps',
    'GitHub Actions CI on portfolio repositories',
    'Docker + Railway deploy pipeline',
    'OpenAI features optional and key-configured where present',
  ],
  engagementTypes: [
    'Internal tools and ops dashboards',
    'Fintech and subscription billing',
    'Database operations platforms',
    'E-commerce and logistics SaaS',
    'API platforms (Django REST + FastAPI)',
    'Railway production deployment',
  ],
  founderHighlights: [
    'U.S. Army veteran — service documented on Joint Services Transcript (JST); FAA-certified air traffic control and electronics maintenance.',
    'TCOLE Master Police Officer (Texas); Washington State law-enforcement equivalency certificate. Former Military Police, Waco PD, and Dallas PD.',
    'Solo builder of thirteen deployed products — requirements through Railway production.',
  ],
}
