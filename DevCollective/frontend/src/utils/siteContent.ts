import { defaultPortfolioProjects, type PortfolioProject } from '../data/portfolioProjects'
import { marketingSiteUrls, portfolioLiveUrls } from '../data/portfolioLiveUrls'
import {
  defaultProfile,
  defaultSkills,
  defaultServices,
  defaultExperience,
  defaultEducation,
  defaultCertifications,
} from '../data/resumeContent'

function isStaleDeployUrl(url: string | undefined): boolean {
  if (!url) return true
  if (url.includes('github.com')) return true
  if (url.includes('onrender.com')) return true
  if (url.includes('store.gilliomfrontlinedigital.com')) return true
  return false
}

function pickLiveUrl(url: string | undefined, canonical: string, extraStale: RegExp[] = []): string {
  if (isStaleDeployUrl(url)) return canonical
  if (extraStale.some((pattern) => pattern.test(url ?? ''))) return canonical
  return url ?? canonical
}

/** This marketing site — excluded from portfolio (redundant self-reference). */
function isSelfMarketingProject(p: Pick<PortfolioProject, 'title' | 'url'>) {
  const projectUrl = p.url ?? ''
  return (
    /gilliom\s*frontline|frontline\s*digital/i.test(p.title) ||
    projectUrl.includes('gilliomfrontlinedigital.onrender.com') ||
    projectUrl.includes(marketingSiteUrls.primary) ||
    projectUrl.includes(marketingSiteUrls.railway) ||
    projectUrl.includes(marketingSiteUrls.railwayMirror)
  )
}

function stripGithubFields(p: PortfolioProject & { repoUrl?: string }): PortfolioProject {
  const { repoUrl: _repoUrl, ...rest } = p
  if (/kristie/i.test(rest.title)) {
    return { ...rest, url: pickLiveUrl(rest.url, portfolioLiveUrls.kristieStore) }
  }
  if (/blog/i.test(rest.title)) {
    return { ...rest, url: pickLiveUrl(rest.url, portfolioLiveUrls.blogApi) }
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
      url: pickLiveUrl(rest.url, portfolioLiveUrls.reactStoreCatalog, [/react-store-catalog-1/i]),
    }
  }
  if (/pc checker/i.test(rest.title)) {
    return {
      ...rest,
      title: 'PC Checker Extreme',
      url: pickLiveUrl(rest.url, portfolioLiveUrls.pcCheckerExtreme),
      detailPath: '/projects/pc-checker',
    }
  }
  if (/specwright/i.test(rest.title)) {
    return {
      ...rest,
      url: pickLiveUrl(rest.url, portfolioLiveUrls.specwrightWeb, [/specwright-api/i]),
    }
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
  return {
    ...canonical,
    ...project,
    proves: project.proves ?? canonical.proves,
    highlights: project.highlights?.length ? project.highlights : canonical.highlights,
  }
}

function migrateProjects(projects: Array<PortfolioProject & { repoUrl?: string }>) {
  const filtered = projects.map(stripGithubFields).map(mergeCanonicalProjectFields)
  const titles = new Set(filtered.map((p) => p.title.toLowerCase()))
  for (const canonical of defaultPortfolioProjects) {
    if (!titles.has(canonical.title.toLowerCase())) {
      filtered.push(canonical)
      titles.add(canonical.title.toLowerCase())
    }
  }
  return filtered.filter((p) => !isSelfMarketingProject(p))
}

export const defaultSiteContent = {
  ...defaultProfile,
  colorScheme: 'blue',
  skills: defaultSkills,
  services: defaultServices,
  experience: defaultExperience,
  education: defaultEducation,
  certifications: defaultCertifications,
  projects: [...defaultPortfolioProjects],
}

// Utility to get editable site content from localStorage (or fallback to defaults)
export const getSiteContent = () => {
  if (typeof globalThis.window !== 'undefined') {
    const stored = globalThis.localStorage.getItem('siteContent')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed.projects)) {
          parsed.projects = migrateProjects(parsed.projects)
        } else {
          parsed.projects = [...defaultPortfolioProjects]
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
        }
        return parsed
      } catch {
        globalThis.localStorage.removeItem('siteContent')
      }
    }
  }
  return { ...defaultSiteContent, projects: [...defaultPortfolioProjects] }
}
