import { defaultProfile } from './resumeContent'

export const business = {
  name: 'Gilliom Frontline Digital',
  owner: defaultProfile.profileName,
  tagline: 'Internal Tools & Operations Dashboards | Secure, Audited, Production-Ready',
  location: 'Wimauma, FL | Serving clients remotely worldwide',
  heroHeadline: 'Automate the work that slows your operation down.',
  heroSubhead:
    'Fleet operations, logistics and back-office workflows still run on spreadsheets, WhatsApp and paper. I replace one of those workflows with working software in a fixed-price, two-week pilot, built on systems that are already live.',
  pilotOffer: {
    eyebrow: 'Start small',
    title: 'Fixed-price automation pilot',
    priceLabel: 'From $750',
    summary:
      'Pick one workflow that costs your team time or money. I scope it, build it on an existing working system, and hand it to your team in two weeks. If it does not show you something your current process misses, you walk away.',
    steps: [
      { title: '15-minute call', description: 'We pick one workflow and agree what success looks like.' },
      { title: 'Fixed scope and price', description: 'Written scope before any work starts. No hourly surprises.' },
      { title: 'Two-week pilot', description: 'Your team uses it on real data, not a slide deck.' },
      { title: 'Keep, extend or walk away', description: 'Implementation and monthly support only if the pilot earns it.' },
    ],
  },
  verticals: [
    {
      title: 'Fleet & logistics',
      description: 'Trip sheets, fuel accountability, maintenance follow-up, driver records and dispatch in one place.',
      proof: 'RigHand AI',
      href: '/case-studies/righand',
      topic: 'Fleet operations pilot',
    },
    {
      title: 'Agribusiness & payments',
      description: 'Supplier deliveries matched to payments and reconciliation, with a record finance can verify.',
      proof: 'AgriPay Logistics AI',
      href: '/case-studies/agripay',
      topic: 'Payments & reconciliation pilot',
    },
    {
      title: 'Business automation',
      description: 'Replace a spreadsheet or manual process with an internal dashboard, API integration or AI workflow.',
      proof: 'AI Software Operations Studio',
      href: '/case-studies/ai-software-operations-studio',
      topic: 'Business automation pilot',
    },
  ],
  portfolioSectionTitle: 'Production applications you can try right now',
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
    { stat: '3', label: 'Flagship systems — focused proof below' },
    { stat: 'Live Stripe', label: 'Production billing on portfolio apps' },
    { stat: 'Django + FastAPI', label: 'Proven in deployed demos' },
    { stat: 'Railway', label: 'Exclusive hosting for my demos' },
  ],
  metrics: [
    '13 production applications — Django, FastAPI, React, TypeScript, PostgreSQL',
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
    'Solo builder of production applications — requirements through Railway production.',
  ],
}
