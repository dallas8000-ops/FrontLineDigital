import { caseStudies } from '../data/caseStudies'
import { caseStudyJsonLd } from '../data/caseStudySchema'
import { canonicalFor, formatTitle, getRouteMeta, routeMeta } from '../data/routeMeta'

describe('routeMeta', () => {
  it('lists every case study and has unique paths', () => {
    const paths = routeMeta.map((r) => r.path)
    expect(new Set(paths).size).toBe(paths.length)
    for (const cs of caseStudies) expect(paths).toContain(`/case-studies/${cs.slug}`)
  })

  it('gives every page its own description', () => {
    const descriptions = routeMeta.map((r) => r.description)
    expect(new Set(descriptions).size).toBe(descriptions.length)
    for (const d of descriptions) expect(d.length).toBeGreaterThan(50)
  })

  it('brands titles once and builds canonicals', () => {
    expect(formatTitle('About')).toBe('About | Frontline Digital')
    expect(formatTitle('Gilliom Frontline Digital | Internal Tools & Ops Dashboards')).toBe(
      'Gilliom Frontline Digital | Internal Tools & Ops Dashboards',
    )
    expect(canonicalFor('/')).toBe('https://gilliomfrontlinedigital.com/')
    expect(canonicalFor('/about')).toBe('https://gilliomfrontlinedigital.com/about')
  })

  it('finds routes with or without a trailing slash', () => {
    expect(getRouteMeta('/services/')?.title).toBe('Services')
    expect(getRouteMeta('/nope')).toBeUndefined()
  })
})

describe('caseStudyJsonLd', () => {
  it('publishes an article and breadcrumb for the case study', () => {
    const cs = caseStudies.find((c) => c.slug === 'righand')!
    const data = caseStudyJsonLd(cs)
    const [article, breadcrumb] = data['@graph'] as Array<Record<string, unknown>>
    expect(article['@type']).toBe('Article')
    expect(article.url).toBe('https://gilliomfrontlinedigital.com/case-studies/righand')
    expect(breadcrumb['@type']).toBe('BreadcrumbList')
  })
})
