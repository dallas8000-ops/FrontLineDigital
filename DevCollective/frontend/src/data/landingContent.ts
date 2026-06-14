export const contactInfo = {
  phone: '(682) 460-4038',
  phoneHref: 'tel:+16824604038',
  email: 'dallas8000@gmail.com',
  emailHref: 'mailto:dallas8000@gmail.com',
  location: 'Tampa, FL',
}

/** Mid-level software developer project rate (USD/hr) before discount */
export const SOFTWARE_DEV_HOURLY_USD = 40
/** Client saves 40% — pays 60% of list (hours × $40/hr) */
export const CLIENT_DISCOUNT_PERCENT = 40
export const CLIENT_PAY_MULTIPLIER = 1 - CLIENT_DISCOUNT_PERCENT / 100
export const clientHourlyRate = Math.round(SOFTWARE_DEV_HOURLY_USD * CLIENT_PAY_MULTIPLIER)

function formatUsd(amount: number) {
  return `$${amount.toLocaleString('en-US')}`
}

function projectPricing(hoursMin: number, hoursMax: number) {
  const listMin = hoursMin * SOFTWARE_DEV_HOURLY_USD
  const listMax = hoursMax * SOFTWARE_DEV_HOURLY_USD
  const priceMin = Math.round(listMin * CLIENT_PAY_MULTIPLIER)
  const priceMax = Math.round(listMax * CLIENT_PAY_MULTIPLIER)
  return {
    listPrice: listMin === listMax ? formatUsd(listMin) : `${formatUsd(listMin)}–${formatUsd(listMax)}`,
    price: priceMin === priceMax ? formatUsd(priceMin) : `${formatUsd(priceMin)}–${formatUsd(priceMax)}`,
    hoursLabel: `${hoursMin}–${hoursMax} dev hours @ $${SOFTWARE_DEV_HOURLY_USD}/hr`,
  }
}

export const pricingNote =
  'Quotes use a $40/hr software developer project rate (mid-level full-stack scope). You receive a 40% discount on the calculated project total — you pay 60% of list (effective $24/hr). Timelines run 2–12 weeks depending on package.'

export type PackageTier = {
  id: string
  name: string
  price: string
  listPrice: string
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
    listPrice: starter.listPrice,
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
    listPrice: pro.listPrice,
    hoursLabel: pro.hoursLabel,
    weeksLabel: '4–6 weeks',
    delivery: `one-time · 4–6 weeks delivery`,
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
    listPrice: premium.listPrice,
    hoursLabel: premium.hoursLabel,
    weeksLabel: '8–12 weeks',
    delivery: `one-time · 8–12 weeks delivery`,
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
  const list = hours * SOFTWARE_DEV_HOURLY_USD
  const discounted = Math.round(list * CLIENT_PAY_MULTIPLIER)
  return `${formatUsd(discounted)}${suffix}`
}

export const addOns = [
  { label: 'Monthly Maintenance', price: `${addonPrice(4, '/mo')}–${addonPrice(8, '/mo')}` },
  { label: 'SEO Package', price: `${addonPrice(8, '/mo')}` },
  { label: 'Logo Design', price: addonPrice(6) },
  { label: 'Extra Pages', price: `${addonPrice(6, '/page')}` },
  { label: 'Rush Delivery (expedite ~2 weeks)', price: `+${addonPrice(20)}` },
]

export const processSectionTitle = 'From Discovery to Production Launch'
export const processSectionSubtitle =
  'Each package maps to a realistic calendar (2–12 weeks) and estimated development hours at $40/hr, with 40% off the list total.'

export const processSteps = [
  {
    id: '01',
    title: 'Free Consult',
    description:
      '30-minute call to capture requirements, acceptance criteria, and a written estimate (hours × $40/hr, minus 40%).',
  },
  {
    id: '02',
    title: 'Design & Build',
    description:
      'Full-stack implementation — React/TypeScript front end, API and database as needed, with automated tests and CI.',
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
