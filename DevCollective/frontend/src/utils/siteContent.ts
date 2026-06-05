import { defaultPortfolioProjects, type PortfolioProject } from '../data/portfolioProjects'
import {
  defaultProfile,
  defaultSkills,
  defaultServices,
  defaultExperience,
  defaultEducation,
  defaultCertifications,
} from '../data/resumeContent'

const DBOPS_LIVE_URL = 'https://dbops-web.onrender.com'
const RIGHAND_LIVE_URL = 'https://righand.onrender.com'
const REACT_STORE_CATALOG_URL = 'https://store.gilliomfrontlinedigital.com'
const PC_CHECKER_EXTREME_URL = 'https://pc-checker-extreme.onrender.com'

/** This marketing site — excluded from portfolio (redundant self-reference). */
function isSelfMarketingProject(p: Pick<PortfolioProject, 'title' | 'url'>) {
  return (
    /gilliom\s*frontline|frontline\s*digital/i.test(p.title) ||
    (p.url ?? '').includes('gilliomfrontlinedigital.onrender.com')
  )
}

function stripGithubFields(p: PortfolioProject & { repoUrl?: string }): PortfolioProject {
  const { repoUrl: _repoUrl, ...rest } = p
  if (/dbops/i.test(rest.title)) {
    const url =
      (rest.url ?? '').includes('dbops-api.onrender.com') || (rest.url ?? '').includes('github.com')
        ? DBOPS_LIVE_URL
        : rest.url || DBOPS_LIVE_URL
    return { ...rest, url }
  }
  if (/righand/i.test(rest.title)) {
    const url = (rest.url ?? '').includes('github.com') ? RIGHAND_LIVE_URL : rest.url || RIGHAND_LIVE_URL
    return { ...rest, url }
  }
  if (/react store catalog/i.test(rest.title)) {
    const url =
      (rest.url ?? '').includes('github.com') ||
      (rest.url ?? '').includes('react-store-catalog.onrender.com') ||
      !rest.url
        ? REACT_STORE_CATALOG_URL
        : rest.url
    return { ...rest, url }
  }
  if (/pc checker/i.test(rest.title)) {
    return {
      ...rest,
      title: 'PC Checker Extreme',
      url: rest.url || PC_CHECKER_EXTREME_URL,
      detailPath: '/projects/pc-checker',
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
