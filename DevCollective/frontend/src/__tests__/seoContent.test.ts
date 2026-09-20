import { portfolioSeoEntries } from '../data/seoContent'
import { caseStudies } from '../data/caseStudies'

describe('portfolio SEO content', () => {
  it('contains the supplied title and description for every promoted app', () => {
    expect(portfolioSeoEntries.map(({ name, title, description }) => ({ name, title, description }))).toEqual([
      {
        name: 'EastBridge Ops Intelligence',
        title: 'EastBridge | EU-East Africa Market Entry & Compliance Intelligence',
        description:
          'Regulatory compliance and operations dashboard for European companies entering the Uganda, Kenya, and Rwanda markets. AI-assisted trade intelligence.',
      },
      {
        name: 'AI Software Operations Studio',
        title: 'AI Software Ops Studio | Encrypted Secret Management & Deployment',
        description:
          'Unified operations workspace for SaaS teams. Secure secret vaults, Railway deployment automation, and Stripe billing integration.',
      },
      {
        name: 'DBOps Control Center',
        title: 'DBOps | Database Operations & Incident Management Platform',
        description:
          'Secure database management with RBAC, audit trails, and SQL reporting. Eliminate spreadsheet-based ops with automated incident workflows.',
      },
      {
        name: 'Specwright',
        title: 'Specwright | Automated FastAPI Documentation & Test Generation',
        description:
          'Keep OpenAPI specs and pytest scaffolds in sync with your FastAPI codebase using AST analysis. Zero-drift documentation for backend teams.',
      },
      {
        name: 'AgriPay Logistics AI',
        title: 'AgriPay | Agricultural Logistics & Mobile Money Payments',
        description:
          'Supply chain tracking and payment platform for East African agriculture. Integrated with Stripe and MTN MoMo sandbox.',
      },
      {
        name: 'Elite Fintech Systems',
        title: 'Elite Fintech | Multi-Currency Billing & FX Snapshot Engine',
        description:
          'Fintech billing platform for East Africa. Automated FX conversion for UGX, KES, and RWF with live Stripe checkout fallback.',
      },
      {
        name: 'RigHand AI',
        title: 'RigHand | Offline-First Trucking Logistics & IFTA Reporting',
        description:
          'Logistics management for fleet operators. Offline sync, GPS trip logging, and automated tax reporting for commercial drivers.',
      },
      {
        name: 'PC Checker Extreme',
        title: 'PC Checker | Cloud-Based System Diagnostics & Telemetry',
        description:
          'Real-time system health monitoring and AI-assisted hardware diagnostics command center.',
      },
      {
        name: 'Kistie Store',
        title: 'Kistie Store | E-commerce Platform for Kampala Fashion',
        description:
          'Modern retail storefront optimized for East African shoppers with multi-currency support and mobile money readiness.',
      },
      {
        name: 'EnPowerCommand',
        title: 'EnPowerCommand | Utility Billing & Usage Dashboard',
        description:
          'Enterprise command center for utility usage tracking, subscription tiers, and automated Stripe billing.',
      },
      {
        name: 'Digital Sales Automation Center',
        title: 'Digital Sales Center | Lead & Campaign Management Dashboard',
        description:
          'Operations hub for sales prospects, automated proposals, and subscription-driven checkout flows.',
      },
    ])
  })

  it('includes RigHand as a formal case study in the portfolio narrative', () => {
    expect(caseStudies.find((study) => study.slug === 'righand')).toMatchObject({
      slug: 'righand',
      title: 'RigHand AI',
      subtitle: 'High-Resilience Software for Fleet Safety & Compliance',
    })
  })
})