import { portfolioLiveUrls } from './portfolioLiveUrls'

export type CaseStudyFeature = {
  title: string
  body: string
}

export type CaseStudy = {
  slug: string
  title: string
  subtitle: string
  liveUrl?: string
  problem: string
  solutionIntro: string
  features: CaseStudyFeature[]
  impact: string
  stack: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'eastbridge',
    title: 'EastBridge Ops Intelligence',
    subtitle: 'Navigating the EU-Africa Regulatory Gap',
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
  },
  {
    slug: 'agripay',
    title: 'AgriPay Logistics AI',
    subtitle: 'Modernizing Agricultural Supply Chains',
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
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug)
}
