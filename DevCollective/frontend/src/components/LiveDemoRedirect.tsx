import { useEffect } from 'react'

type LiveDemoRedirectProps = {
  url: string
  label?: string
}

/** Sends visitors to an external live demo; shows a fallback link if the redirect is blocked. */
export default function LiveDemoRedirect({ url, label = 'live demo' }: LiveDemoRedirectProps) {
  useEffect(() => {
    window.location.replace(url)
  }, [url])

  return (
    <div className="section-inner py-20 text-center">
      <p className="text-slate-200">
        Opening {label}…{' '}
        <a href={url} className="font-semibold text-brand-gold hover:text-white">
          Click here if you are not redirected.
        </a>
      </p>
    </div>
  )
}
