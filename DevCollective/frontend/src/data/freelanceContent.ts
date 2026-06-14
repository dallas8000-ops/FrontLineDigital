import { defaultProfile } from './resumeContent'

export const business = {
  name: 'Gilliom Frontline Digital',
  owner: defaultProfile.profileName,
  tagline: 'Full-Stack Software Engineering · QA Automation · Production Delivery',
  location: 'Tampa, FL · Remote & On-Site · Open to Relocation',
  heroHeadline: 'My portfolio is what I deliver.',
  heroSubhead:
    'Seven live applications — e-commerce, APIs, desktop diagnostics, mobile SaaS, database operations, and developer tooling — each built solo from architecture through production. Browse the work below; that is the scope I bring to your project.',
  portfolioSectionTitle: 'What I build — proven in production',
  portfolioSectionLead:
    'Every card is a deployed product, not a mockup. If you need something in this space — or a custom combination — I have already shipped the reference implementation.',
  valueProps: [
    {
      title: 'Full-stack delivery',
      description:
        'React, TypeScript, Django, FastAPI, Flask, PostgreSQL, and cloud deployment on Railway — one engineer from requirements through production.',
    },
    {
      title: 'QA built in',
      description:
        'User stories with acceptance criteria, unittest/Jest/Vitest/Playwright suites, live usability checks, and CI validation before every release.',
    },
    {
      title: 'Transparent engagement',
      description:
        '$40/hr project rate with clear hour estimates, 2–12 week timelines, and 40% off list for fixed packages — no agency markup.',
    },
  ],
  credentials: [
    { stat: '7', label: 'Live apps in the portfolio' },
    { stat: '2025–26', label: 'SDGKU full-stack diploma' },
    { stat: '$40/hr', label: 'Published developer rate' },
    { stat: '100%', label: 'Solo ownership — design to deploy' },
  ],
  engagementTypes: [
    'Fixed-price web & API projects',
    'QA automation & test strategy',
    'Production fixes & feature delivery',
    'Technical documentation & runbooks',
  ],
}
