import { useEffect } from 'react'

export function usePageTitle(title: string, description?: string) {
  useEffect(() => {
    const base = 'Frontline Digital'
    document.title = title ? `${title} | ${base}` : base
    return () => { document.title = base }
  }, [title])

  useEffect(() => {
    if (!description) return
    const tag = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!tag) return
    const prev = tag.content
    tag.content = description
    return () => { tag.content = prev }
  }, [description])
}
