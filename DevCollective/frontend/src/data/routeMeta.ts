import { caseStudies } from './caseStudies'

export const SITE_ORIGIN = 'https://gilliomfrontlinedigital.com'
const BRAND = 'Frontline Digital'

export type RouteMeta = {
  path: string
  /** Page title before branding; formatTitle() appends the brand. */
  title: string
  description: string
  /** Published in the sitemap and prerendered to its own HTML file. */
  indexable: boolean
}

export const HOME_TITLE = 'Gilliom Frontline Digital | Internal Tools & Ops Dashboards'
export const HOME_DESCRIPTION =
  'Gilliom Frontline Digital builds live internal tools and operations dashboards with Django, FastAPI, React, PostgreSQL, Stripe billing, JWT, and RBAC.'

/** "About" -> "About | Frontline Digital"; titles that already carry the brand are left alone. */
export function formatTitle(title: string): string {
  if (!title) return BRAND
  return title.includes(BRAND) ? title : `${title} | ${BRAND}`
}

export function caseStudyTitle(title: string): string {
  return `Case Study: ${title}`
}

const staticRoutes: RouteMeta[] = [
  { path: '/', title: HOME_TITLE, description: HOME_DESCRIPTION, indexable: true },
  {
    path: '/about',
    title: 'About',
    description:
      'Barney R. Gilliom of Gilliom Frontline Digital: full-stack developer building internal tools, operations dashboards and automation for teams, available remotely worldwide.',
    indexable: true,
  },
  {
    path: '/services',
    title: 'Services',
    description:
      'Engineering engagements for operations teams: internal tools, dashboards, Stripe billing, RBAC and deployment, each scoped from requirements to a tested release.',
    indexable: true,
  },
  {
    path: '/dashboard',
    title: 'Projects — Production Portfolio',
    description:
      'Production portfolio of internal tools, dashboards and SaaS products with live demos: RigHand AI, DBOps, AgriPay, EastBridge and more.',
    indexable: true,
  },
  {
    path: '/profile',
    title: 'Profile & CV — Barney R. Gilliom',
    description:
      'Profile and CV of Barney R. Gilliom: full-stack developer working in Django, FastAPI, React, TypeScript and PostgreSQL, with downloadable resume.',
    indexable: true,
  },
  {
    path: '/contact',
    title: 'Contact',
    description:
      'Tell Gilliom Frontline Digital what your team needs to see or control and get scope, timeline and a written estimate. Free 30-minute consultation.',
    indexable: true,
  },
  {
    path: '/projects/pc-checker',
    title: 'PC Checker Extreme',
    description:
      'PC Checker Extreme: a cloud-hosted diagnostic command center with live system telemetry, WMI and winget scans, scan history and optional AI review.',
    indexable: true,
  },
]

const caseStudyRoutes: RouteMeta[] = caseStudies.map((cs) => ({
  path: `/case-studies/${cs.slug}`,
  title: caseStudyTitle(cs.title),
  description: cs.metaDescription,
  indexable: true,
}))

export const routeMeta: RouteMeta[] = [...staticRoutes, ...caseStudyRoutes]

export function getRouteMeta(path: string): RouteMeta | undefined {
  const normalized = path === '/' ? '/' : path.replace(/\/+$/, '')
  return routeMeta.find((r) => r.path === normalized)
}

export function canonicalFor(path: string): string {
  return path === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${path}`
}
