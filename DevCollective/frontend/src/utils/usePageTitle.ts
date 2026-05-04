import { useEffect } from 'react'

export function usePageTitle(title: string) {
  useEffect(() => {
    const base = 'Frontline Digital'
    document.title = title ? `${title} | ${base}` : base
    return () => { document.title = base }
  }, [title])
}
