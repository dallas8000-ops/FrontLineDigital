import type { CaseStudy } from './caseStudies'
import { SITE_ORIGIN } from './routeMeta'

const ORGANIZATION_ID = `${SITE_ORIGIN}/#organization`
const PERSON_ID = `${SITE_ORIGIN}/profile#barney-gilliom`

/** Article + BreadcrumbList JSON-LD for a case-study page; facts come only from the case study itself. */
export function caseStudyJsonLd(cs: CaseStudy) {
  const url = `${SITE_ORIGIN}/case-studies/${cs.slug}`
  const software: Record<string, unknown> = {
    '@type': 'SoftwareApplication',
    name: cs.title,
    description: cs.subtitle,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
  }
  if (cs.liveUrl) software.url = cs.liveUrl

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: `${cs.title}: ${cs.subtitle}`,
        description: cs.metaDescription,
        url,
        mainEntityOfPage: url,
        image: cs.demoVideo ? `${SITE_ORIGIN}${cs.demoVideo.posterSrc}` : `${SITE_ORIGIN}/images/og/og-cover.jpg`,
        author: { '@id': PERSON_ID },
        publisher: { '@id': ORGANIZATION_ID },
        keywords: cs.stack.join(', '),
        about: software,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_ORIGIN}/` },
          { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE_ORIGIN}/dashboard` },
          { '@type': 'ListItem', position: 3, name: cs.title, item: url },
        ],
      },
    ],
  }
}
