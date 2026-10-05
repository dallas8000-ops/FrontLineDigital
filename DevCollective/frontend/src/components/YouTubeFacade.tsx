import React, { useState } from 'react'
import { Play } from 'lucide-react'

type YouTubeFacadeProps = {
  videoId: string
  title: string
  className?: string
}

const YOUTUBE_ID_PATTERN = /^[A-Za-z0-9_-]{11}$/

/**
 * Lightweight YouTube embed: renders only the thumbnail + play button on first paint,
 * then swaps in the privacy-enhanced iframe (with sound) on a single click.
 * Avoids loading ~1 MB of YouTube player JS on every homepage visit.
 */
export default function YouTubeFacade({ videoId, title, className = '' }: YouTubeFacadeProps) {
  const [active, setActive] = useState(false)

  if (!YOUTUBE_ID_PATTERN.test(videoId)) return null

  const id = encodeURIComponent(videoId)
  const embedSrc = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`

  return (
    <div className={`relative aspect-video w-full overflow-hidden rounded-lg bg-black ${className}`}>
      {active ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={embedSrc}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group absolute inset-0 h-full w-full"
          aria-label={`Play video: ${title}`}
        >
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            loading="eager"
            decoding="async"
            onError={(event) => {
              event.currentTarget.style.visibility = 'hidden'
            }}
            className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold text-brand-navy shadow-lg transition group-hover:scale-110">
              <Play size={28} fill="currentColor" />
            </span>
          </span>
        </button>
      )}
    </div>
  )
}
