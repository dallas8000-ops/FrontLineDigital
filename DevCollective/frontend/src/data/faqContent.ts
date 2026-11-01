import { business } from './freelanceContent'
import { packages, SOFTWARE_DEV_HOURLY_USD, contactInfo } from './landingContent'

export type FaqItem = { question: string; answer: string }

const starter = packages[0]
const premium = packages[packages.length - 1]
/** Overall package span, e.g. "$2,000" to "$12,000", taken from the package price ranges. */
const lowestPackagePrice = starter.price.split('–')[0]
const highestPackagePrice = premium.price.split('–').pop() ?? premium.price

/** Visible on the home page and published as FAQPage JSON-LD — keep both in sync by editing only this list. */
export const faqItems: FaqItem[] = [
  {
    question: 'How much does an automation pilot cost?',
    answer: `Pilots start ${business.pilotOffer.priceLabel.toLowerCase()} for one workflow. You get a written scope and fixed price before any work starts, so there are no hourly surprises.`,
  },
  {
    question: 'How long does a pilot take?',
    answer: 'Two weeks. Your team uses the pilot on real data, not a slide deck.',
  },
  {
    question: 'What happens after the pilot?',
    answer:
      `You decide whether to keep it, extend it or walk away. If you keep it, the full build is quoted as a fixed-scope package, estimated at $${SOFTWARE_DEV_HOURLY_USD}/hr (typically ${lowestPackagePrice} to ${highestPackagePrice}). Monthly support is offered only if the pilot earns it.`,
  },
  {
    question: 'What does a larger project cost?',
    answer: `Larger builds are quoted at $${SOFTWARE_DEV_HOURLY_USD}/hr, with a written estimate (scoped hours × $${SOFTWARE_DEV_HOURLY_USD}) before work begins. Fixed-scope packages run from ${starter.name.charAt(0)}${starter.name.slice(1).toLowerCase()} at ${starter.price} (${starter.weeksLabel}) to ${premium.name.charAt(0)}${premium.name.slice(1).toLowerCase()} at ${premium.price} (${premium.weeksLabel}).`,
  },
  {
    question: 'What kinds of workflows do you automate?',
    answer:
      'Three areas: fleet and logistics (trip sheets, fuel accountability, maintenance follow-up, driver records, dispatch), agribusiness payments (supplier deliveries matched to payments and reconciliation), and general business automation (replacing a spreadsheet or manual process with an internal dashboard, API integration or AI workflow).',
  },
  {
    question: 'What technology do you build with?',
    answer:
      'React and TypeScript front ends, Django or FastAPI APIs, PostgreSQL, Docker and GitHub Actions CI, deployed on Railway. Stripe handles billing where payments are needed.',
  },
  {
    question: 'How do I pay?',
    answer: `Fixed-price work is paid upfront once the written scope is agreed. International clients pay by card through Stripe, and clients in Uganda can pay by mobile money. Payment details are sent with your written scope, never before. If anyone asks you to pay before you have a written scope from me, contact me at ${contactInfo.email} before sending anything.`,
  },
  {
    question: 'Do you work with clients outside Uganda?',
    answer: `Yes. I am a U.S. citizen based in Kampala, Uganda, and I work remotely with clients worldwide. Call ${contactInfo.phone}, message on WhatsApp, or email ${contactInfo.email}.`,
  },
  {
    question: 'Can I see working software before I hire you?',
    answer:
      'Yes. The portfolio links to live demos running on Railway, with case studies for RigHand AI, DBOps Control Center, AgriPay and AI Software Operations Studio.',
  },
]

const SITE = 'https://gilliomfrontlinedigital.com'

export const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

export const pilotHowToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How the fixed-price automation pilot works',
  description: business.pilotOffer.summary,
  totalTime: 'P14D',
  url: `${SITE}/#pilot`,
  step: business.pilotOffer.steps.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.title,
    text: step.description,
    url: `${SITE}/#pilot`,
  })),
}

/** JSON for a <script type="application/ld+json"> body; escapes "<" so content can't close the tag. */
export function toJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
