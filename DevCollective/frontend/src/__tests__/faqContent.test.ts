import { faqItems, faqJsonLd, pilotHowToJsonLd, toJsonLd } from '../data/faqContent'
import { business } from '../data/freelanceContent'
import { validateLead } from '../utils/contactForm'

describe('FAQ and HowTo structured data', () => {
  it('publishes exactly the visible FAQ questions and answers', () => {
    expect(faqJsonLd.mainEntity).toEqual(
      faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    )
  })

  it('states the live pilot price and contact details', () => {
    const text = faqItems.map((item) => item.answer).join(' ')
    expect(text).toContain('from $750')
    expect(text).toContain('(656) 245-5253')
    expect(text).toContain('barney@gilliomfrontlinedigital.com')
  })

  it('does not publish mobile money account details', () => {
    const everything = JSON.stringify(faqItems) + JSON.stringify(faqJsonLd)
    expect(everything).not.toMatch(/0?784\s?023\s?270/)
    expect(everything).not.toMatch(/Nalumansi/i)
    const pay = faqItems.find((item) => item.question === 'How do I pay?')
    expect(pay?.answer).toContain('Payment details are sent with your written scope, never before.')
  })

  it('explains how the pilot leads into the fixed-scope packages', () => {
    const after = faqItems.find((item) => item.question === 'What happens after the pilot?')
    expect(after?.answer).toContain('fixed-scope package, estimated at $40/hr (typically $2,000 to $12,000)')
  })

  it('does not ask about Florida', () => {
    expect(faqItems.some((item) => /florida/i.test(item.question))).toBe(false)
  })

  it('builds HowTo steps from the pilot offer', () => {
    expect(pilotHowToJsonLd.step.map((s) => s.name)).toEqual(business.pilotOffer.steps.map((s) => s.title))
  })

  it('escapes "<" so JSON-LD cannot close its script tag', () => {
    expect(toJsonLd({ a: '</script>' })).not.toContain('</script>')
  })
})

describe('validateLead()', () => {
  it('requires name, a valid email and a workflow description', () => {
    expect(validateLead({ name: '', email: 'x', workflow: 'short' })).toEqual({
      name: 'Name is required.',
      email: 'Enter a valid email address.',
      workflow: 'Describe the workflow in a sentence or two.',
    })
  })

  it('accepts a complete request', () => {
    expect(validateLead({ name: 'Ann', email: 'ann@example.com', workflow: 'Fuel logs live in a spreadsheet' })).toEqual({})
  })
})
