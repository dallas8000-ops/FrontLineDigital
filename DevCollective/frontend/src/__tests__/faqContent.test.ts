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
