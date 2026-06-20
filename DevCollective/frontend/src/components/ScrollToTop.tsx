import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    if (pathname !== '/') {
      window.scrollTo({ top: 0, left: 0 })
    }
  }, [pathname, hash])

  return null
}
