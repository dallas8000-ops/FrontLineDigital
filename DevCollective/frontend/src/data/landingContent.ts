export const contactInfo = {
  phone: '(682) 460-4038',
  phoneHref: 'tel:+16824604038',
  email: 'dallas8000@gmail.com',
  emailHref: 'mailto:dallas8000@gmail.com',
  location: 'Tampa, FL',
}

/** Standard entry-level full-stack project rate (USD/hr) — quoted before work begins */
export const SOFTWARE_DEV_HOURLY_USD = 40

function formatUsd(amount: number) {
  return `$${amount.toLocaleString('en-US')}`
}

function projectPricing(hoursMin: number, hoursMax: number) {
  const priceMin = hoursMin * SOFTWARE_DEV_HOURLY_USD
  const priceMax = hoursMax * SOFTWARE_DEV_HOURLY_USD
  return {
    price: priceMin === priceMax ? formatUsd(priceMin) : `${formatUsd(priceMin)}–${formatUsd(priceMax)}`,
    hoursLabel: `${hoursMin}–${hoursMax} dev hours @ $${SOFTWARE_DEV_HOURLY_USD}/hr`,
  }
}

export const pricingNote =
  `Fixed-scope packages billed at $${SOFTWARE_DEV_HOURLY_USD}/hr — standard entry-level full-stack rate. Each package maps to a realistic 2–12 week timeline. You receive a written estimate (scoped hours × $${SOFTWARE_DEV_HOURLY_USD}) before any work begins.`

export type PackageTier = {
  id: string
  name: string
  price: string
  hoursLabel: string
  weeksLabel: string
  delivery: string
  popular?: boolean
  features: string[]
}

const starter = projectPricing(50, 75)
const pro = projectPricing(100, 150)
const premium = projectPricing(200, 300)

export const packages: PackageTier[] = [
  {
    id: '01',
    name: 'STARTER',
    price: starter.price,
    hoursLabel: starter.hoursLabel,
    weeksLabel: '2–3 weeks',
    delivery: 'one-time · 2–3 weeks delivery',
    features: [
      '1-page professional business website',
      'Mobile-responsive design',
      'Contact form & click-to-call',
      'Google Maps integration',
      'Basic on-page SEO setup',
    ],
  },
  {
    id: '02',
    name: 'PRO',
    price: pro.price,
    hoursLabel: pro.hoursLabel,
    weeksLabel: '4–6 weeks',
    delivery: 'one-time · 4–6 weeks delivery',
    popular: true,
    features: [
      'Up to 5 custom pages',
      'E-commerce OR online booking ready',
      'Custom branding & color scheme',
      'Social media links & feeds',
      'Google Business Profile setup',
      'Contact form + email notifications',
    ],
  },
  {
    id: '03',
    name: 'PREMIUM',
    price: premium.price,
    hoursLabel: premium.hoursLabel,
    weeksLabel: '8–12 weeks',
    delivery: 'one-time · 8–12 weeks delivery',
    features: [
      'Full e-commerce online store',
      'Payment processing (Stripe/Square)',
      'Product catalog — up to 50 items',
      'Inventory & order management',
      'Email marketing integration',
      '30 days post-launch support',
    ],
  },
]

function addonPrice(hours: number, suffix = '') {
  return `${formatUsd(hours * SOFTWARE_DEV_HOURLY_USD)}${suffix}`
}

export const addOns = [
  { label: 'Monthly Maintenance', price: `${addonPrice(4, '/mo')}–${addonPrice(8, '/mo')}` },
  { label: 'SEO Package', price: addonPrice(8, '/mo') },
  { label: 'Logo Design', price: addonPrice(6) },
  { label: 'Extra Pages', price: `${addonPrice(6, '/page')}` },
  { label: 'Rush Delivery (expedite ~2 weeks)', price: `+${addonPrice(20)}` },
]

export const processSectionTitle = 'From Discovery to Production Launch'
export const processSectionSubtitle =
  `Each package maps to a realistic calendar (2–12 weeks) and estimated development hours at $${SOFTWARE_DEV_HOURLY_USD}/hr.`

export const processSteps = [
  {
    id: '01',
    title: 'Free Consult',
    description:
      `30-minute call to capture requirements, acceptance criteria, and a written estimate (scoped hours × $${SOFTWARE_DEV_HOURLY_USD}/hr).`,
  },
  {
    id: '02',
    title: 'Design & Build',
    description:
      'Full-stack implementation — React/TypeScript front end, Django or FastAPI API, PostgreSQL, automated tests, and CI.',
  },
  {
    id: '03',
    title: 'Review & Revise',
    description:
      'You verify features against agreed criteria; we iterate until the build meets your sign-off.',
  },
  {
    id: '04',
    title: 'Launch Live',
    description:
      'Production deployment on Railway, smoke checks on live URLs, and handoff with post-launch support where included.',
  },
]
