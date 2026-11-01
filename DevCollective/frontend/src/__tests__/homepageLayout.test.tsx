import React from 'react'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home, { HOME_FAQ_COUNT } from '../pages/Home'
import Services from '../pages/Services'
import { faqItems } from '../data/faqContent'

// contactDelivery reads import.meta.env (Vite-only); the layout tests never submit the form.
jest.mock('../utils/contactDelivery', () => ({ deliverContact: jest.fn() }))

const renderAt = (ui: React.ReactElement) => render(<MemoryRouter>{ui}</MemoryRouter>)

const sectionHeadingIds = (container: HTMLElement) =>
  Array.from(container.querySelectorAll('section[aria-labelledby]')).map((s) => s.getAttribute('aria-labelledby'))

describe('homepage layout', () => {
  it('renders exactly the 8 approved sections, in order', () => {
    const { container } = renderAt(<Home />)
    const sections = Array.from(container.querySelectorAll(':scope > div > section'))
    // 8 approved sections; pricing is two <section> elements (packages + add-ons strip)
    expect(sections).toHaveLength(9)
    expect(sections[6].getAttribute('aria-label')).toBe('Add-ons')
    expect(sectionHeadingIds(container)).toEqual([
      'verticals-heading',
      'pilot-heading',
      'portfolio-heading',
      'founder-heading',
      'pricing-heading',
      'faq-heading',
      'request-pilot-heading',
    ])
    // hero (no aria-labelledby) is first and holds the demo video
    expect(sections[0].querySelector('#demo-video')).not.toBeNull()
    // add-ons stay attached to pricing
    expect(screen.getByText('Add-ons:')).toBeInTheDocument()
  })

  it('keeps removed sections off the homepage', () => {
    const { container } = renderAt(<Home />)
    for (const id of ['process-heading', 'solutions-heading', 'capability-heading', 'architecture-heading', 'metrics-heading']) {
      expect(container.querySelector(`#${id}`)).toBeNull()
    }
    expect(container.querySelector('a[href="/services#solutions"]')).not.toBeNull()
    expect(screen.getByText('Deployed applications')).toBeInTheDocument()
  })

  it('shows the top FAQ questions and expands to all of them', () => {
    const { container } = renderAt(<Home />)
    const faq = container.querySelector('#faq') as HTMLElement
    expect(within(faq).getAllByRole('article')).toHaveLength(HOME_FAQ_COUNT)
    fireEvent.click(within(faq).getByRole('button', { name: `See all ${faqItems.length} questions` }))
    expect(within(faq).getAllByRole('article')).toHaveLength(faqItems.length)
    // structured data still lists every question for search engines
    const ld = Array.from(faq.querySelectorAll('script[type="application/ld+json"]')).map((s) => s.innerHTML).join('')
    for (const item of faqItems) expect(ld).toContain(item.question)
  })
})

describe('services page', () => {
  it('now carries the solutions, architecture scope, diagrams and metrics', () => {
    const { container } = renderAt(<Services />)
    for (const id of ['solutions-heading', 'capability-heading', 'architecture-heading', 'metrics-heading']) {
      expect(container.querySelector(`#${id}`)).not.toBeNull()
    }
    expect(container.querySelector('#solutions')).not.toBeNull()
  })
})
