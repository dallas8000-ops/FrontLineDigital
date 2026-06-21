import { defaultPortfolioProjects, withHealthyDemoUrl, type PortfolioProject } from '../data/portfolioProjects'
import { apiOnlyRailwayHosts, deprecatedRailwayHosts, legacyDeadHosts, marketingSiteUrls, portfolioLiveUrls } from '../data/portfolioLiveUrls'
import {
  defaultProfile,
  defaultSkills,
  defaultServices,
  defaultExperience,
  defaultEducation,
  defaultCertifications,
} from '../data/resumeContent'

function isStaleDeployUrl(url: string | undefined, canonical: string): boolean {
  if (!url) return true
  if (url.includes('github.com')) return true
  if (deprecatedRailwayHosts.some((host) => url.includes(host))) return true
  if (apiOnlyRailwayHosts.some((host) => url.includes(host))) return true
  if (legacyDeadHosts.some((host) => url.includes(host))) return true
  try {
    const storedHost = new URL(url).host
    const canonicalHost = new URL(canonical).host
    if (storedHost !== canonicalHost && storedHost.endsWith('-production.up.railway.app')) {
      return true
    }
  } catch {
    return true
  }
  return false
}

function pickLiveUrl(url: string | undefined, canonical: string, extraStale: RegExp[] = []): string {
  if (isStaleDeployUrl(url, canonical)) return canonical
  if (extraStale.some((pattern) => pattern.test(url ?? ''))) return canonical
  return url ?? canonical
}

/** This marketing site — excluded from portfolio (redundant self-reference). */
function isSelfMarketingProject(p: Pick<PortfolioProject, 'title' | 'url'>) {
  const projectUrl = p.url ?? ''
  return (
    /gilliom\s*frontline|frontline\s*digital/i.test(p.title) ||
    projectUrl.includes(marketingSiteUrls.primary) ||
    projectUrl.includes(marketingSiteUrls.railway)
  )
}

function stripGithubFields(p: PortfolioProject): PortfolioProject {
  const { ...rest } = p
  if (/elite\s*fintech/i.test(rest.title)) {
    return {
      ...rest,
      url: pickLiveUrl(rest.url, portfolioLiveUrls.eliteFintech, [/elite-fintech-api/i]),
    }
  }
  if (/kistie/i.test(rest.title)) {
    return {
      ...rest,
      url: pickLiveUrl(rest.url, portfolioLiveUrls.kistieStore),
    }
  }
  if (/silverfox/i.test(rest.title)) {
    return {
      ...rest,
      url: pickLiveUrl(rest.url, portfolioLiveUrls.silverfox),
    }
  }
  if (/blog/i.test(rest.title)) {
    return {
      ...rest,
      url: pickLiveUrl(rest.url, portfolioLiveUrls.blogApi),
    }
  }
  if (/dbops/i.test(rest.title)) {
    return {
      ...rest,
      url: pickLiveUrl(rest.url, portfolioLiveUrls.dbopsWeb, [/dbops-api/i]),
    }
  }
  if (/righand/i.test(rest.title)) {
    return {
      ...rest,
      url: pickLiveUrl(rest.url, portfolioLiveUrls.righandFrontend, [/righand(?!-frontend)/i]),
    }
  }
  if (/react store catalog/i.test(rest.title)) {
    return {
      ...rest,
      url: pickLiveUrl(rest.url, portfolioLiveUrls.reactStoreCatalog, [
        /react-store-catalog-production/i,
        /onrender/i,
      ]),
    }
  }
  if (/pc checker/i.test(rest.title)) {
    return {
      ...rest,
      title: 'PC Checker Extreme',
      detailPath: '/projects/pc-checker',
      url: pickLiveUrl(rest.url, portfolioLiveUrls.pcCheckerExtreme),
    }
  }
  if (/specwright/i.test(rest.title)) {
    return {
      ...rest,
      url: pickLiveUrl(rest.url, portfolioLiveUrls.specwrightWeb, [/specwright-api/i]),
    }
  }
  if (/api.?transfer|stripe.?installer|automation.?center|deployment.*stripe/i.test(rest.title)) {
    return { ...rest, url: pickLiveUrl(rest.url, portfolioLiveUrls.automationCenter) }
  }
  if (/enpower/i.test(rest.title)) {
    return { ...rest, url: pickLiveUrl(rest.url, portfolioLiveUrls.enPowerCommand) }
  }
  if ((rest.url ?? '').includes('github.com')) {
    const { url: _url, ...noUrl } = rest
    return noUrl
  }
  return rest
}

function mergeCanonicalProjectFields(project: PortfolioProject): PortfolioProject {
  const canonical = defaultPortfolioProjects.find(
    (p) => p.title.toLowerCase() === project.title.toLowerCase()
  )
  if (!canonical) return project
  const merged = {
    ...canonical,
    ...project,
    proves: project.proves ?? canonical.proves,
    highlights: project.highlights?.length ? project.highlights : canonical.highlights,
  }
  return stripGithubFields(merged)
}

/** Retired portfolio cards — merged into Deployment & Stripe Automation Center. */
const retiredPortfolioTitles = new Set([
  'stripe installer',
  'api transfer',
])

function migrateProjects(projects: Array<PortfolioProject & { repoUrl?: string }>) {
  const filtered = projects
    .filter((p) => !retiredPortfolioTitles.has(p.title.toLowerCase()))
    .map(stripGithubFields)
    .map(mergeCanonicalProjectFields)
  const titles = new Set(filtered.map((p) => p.title.toLowerCase()))
  for (const canonical of defaultPortfolioProjects) {
    if (!titles.has(canonical.title.toLowerCase())) {
      filtered.push(canonical)
      titles.add(canonical.title.toLowerCase())
    }
  }
  return filtered.filter((p) => !isSelfMarketingProject(p)).map(withHealthyDemoUrl)
}

export const defaultSiteContent = {
  ...defaultProfile,
  colorScheme: 'blue',
  skills: defaultSkills,
  services: defaultServices,
  experience: defaultExperience,
  education: defaultEducation,
  certifications: defaultCertifications,
  projects: defaultPortfolioProjects.map(withHealthyDemoUrl),
}

// Bump when portfolio demo URLs or project list changes — refreshes stale localStorage.
const SITE_CONTENT_SCHEMA_VERSION = 15

function persistSiteContent(parsed: Record<string, unknown>) {
  try {
    globalThis.localStorage.setItem('siteContent', JSON.stringify(parsed))
  } catch {
    /* quota / private mode — ignore */
  }
}

// Utility to get editable site content from localStorage (or fallback to defaults)
export const getSiteContent = () => {
  if (typeof globalThis.window !== 'undefined') {
    const stored = globalThis.localStorage.getItem('siteContent')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        let dirty = false
        if ((parsed.schemaVersion ?? 0) < SITE_CONTENT_SCHEMA_VERSION) {
          parsed.schemaVersion = SITE_CONTENT_SCHEMA_VERSION
          parsed.projects = defaultPortfolioProjects.map(withHealthyDemoUrl)
          dirty = true
        } else if (Array.isArray(parsed.projects)) {
          const migrated = migrateProjects(parsed.projects)
          if (JSON.stringify(migrated) !== JSON.stringify(parsed.projects)) {
            parsed.projects = migrated
            dirty = true
          }
        } else {
          parsed.projects = defaultPortfolioProjects.map(withHealthyDemoUrl)
          dirty = true
        }
        if (!parsed.experience) parsed.experience = defaultExperience
        if (!parsed.education) parsed.education = defaultEducation
        if (!parsed.certifications) parsed.certifications = defaultCertifications
        delete parsed.linkedInUrl
        if (
          parsed.profileTitle?.includes('technician') ||
          parsed.profileTitle?.includes('QA Automation Engineer, Python') ||
          parsed.about?.includes('IT technician')
        ) {
          parsed.profileTitle = defaultProfile.profileTitle
          parsed.about = defaultProfile.about
          parsed.skills = defaultSkills
          parsed.services = defaultServices
          parsed.experience = defaultExperience
          dirty = true
        }
        if (dirty) {
          persistSiteContent(parsed)
        }
        return parsed
      } catch {
        globalThis.localStorage.removeItem('siteContent')
      }
    }
  }
  return { ...defaultSiteContent, projects: defaultPortfolioProjects.map(withHealthyDemoUrl) }
}
