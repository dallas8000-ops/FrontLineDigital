import { useEffect } from 'react'
import { SITE_ORIGIN, formatTitle, getRouteMeta } from '../data/routeMeta'

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, key)
    document.head.appendChild(tag)
  }
  tag.content = content
}

export function usePageTitle(title: string, description?: string) {
  useEffect(() => {
    const pageTitle = formatTitle(title)
    const pathname = window.location.pathname === '/'
      ? '/'
      : window.location.pathname.replace(/\/+$/, '')
    const canonicalUrl = `${SITE_ORIGIN}${pathname}`
    // Same description the build-time prerender wrote for this route, so pages without one
    // don't keep the home page's description after client-side navigation.
    const pageDescription = description ?? getRouteMeta(pathname)?.description

    document.title = pageTitle

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = canonicalUrl

    setMeta('property', 'og:title', pageTitle)
    setMeta('property', 'og:url', canonicalUrl)
    setMeta('name', 'twitter:title', pageTitle)
    setMeta('name', 'twitter:url', canonicalUrl)

    if (pageDescription) {
      setMeta('name', 'description', pageDescription)
      setMeta('property', 'og:description', pageDescription)
      setMeta('name', 'twitter:description', pageDescription)
    }
  }, [title, description])
}
