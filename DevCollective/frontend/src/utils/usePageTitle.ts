import { useEffect } from 'react'

const SITE_ORIGIN = 'https://gilliomfrontlinedigital.com'

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
    const base = 'Frontline Digital'
    const pageTitle = title ? `${title} | ${base}` : base
    const pathname = window.location.pathname === '/'
      ? '/'
      : window.location.pathname.replace(/\/+$/, '')
    const canonicalUrl = `${SITE_ORIGIN}${pathname}`

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

    if (description) {
      setMeta('name', 'description', description)
      setMeta('property', 'og:description', description)
      setMeta('name', 'twitter:description', description)
    }
  }, [title, description])
}
