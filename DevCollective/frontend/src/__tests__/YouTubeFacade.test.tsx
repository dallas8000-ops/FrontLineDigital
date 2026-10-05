import React from 'react'
import * as fs from 'fs'
import * as path from 'path'
import { render, screen, fireEvent } from '@testing-library/react'
import YouTubeFacade from '../components/YouTubeFacade'
import { contactInfo } from '../data/landingContent'

describe('YouTubeFacade', () => {
  const props = { videoId: contactInfo.youtubeVideoId, title: contactInfo.youtubeVideoTitle }

  it('renders a thumbnail play button and defers the YouTube iframe until clicked', () => {
    const { container } = render(<YouTubeFacade {...props} />)

    expect(container.querySelector('iframe')).toBeNull()
    const button = screen.getByRole('button', { name: /play video/i })
    expect(button.querySelector('img')?.getAttribute('src')).toBe(
      `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
    )
  })

  it('loads the privacy-enhanced embed with autoplay after one click', () => {
    const { container } = render(<YouTubeFacade {...props} />)
    fireEvent.click(screen.getByRole('button', { name: /play video/i }))

    const iframe = container.querySelector('iframe')
    expect(iframe).not.toBeNull()
    const src = new URL(iframe!.getAttribute('src')!)
    expect(src.origin).toBe('https://www.youtube-nocookie.com')
    expect(src.pathname).toBe(`/embed/${props.videoId}`)
    expect(src.searchParams.get('autoplay')).toBe('1')
    expect(iframe!.getAttribute('allow')).toContain('autoplay')
    expect(iframe!.getAttribute('title')).toBe(props.title)
  })

  it('renders nothing for a malformed video id (no URL injection into src)', () => {
    const { container } = render(<YouTubeFacade videoId={'abc"><script>'} title="x" />)
    expect(container).toBeEmptyDOMElement()
  })
})

describe('homepage demo video wiring', () => {
  const read = (rel: string) => fs.readFileSync(path.resolve(process.cwd(), rel), 'utf8')

  it('embeds the demo video in the homepage hero under #demo-video', () => {
    const home = read('src/pages/Home.tsx')
    expect(home).toContain('id="demo-video"')
    expect(home).toContain('<YouTubeFacade')
  })

  it('nav "Latest video" links point at the homepage embed, not the About page', () => {
    const nav = read('src/components/Navigation.tsx')
    expect(nav).not.toContain('/about#latest-video')
    expect(nav.match(/href="\/#demo-video"/g)?.length).toBe(2)
  })

  it('never streams video from GitHub LFS media URLs', () => {
    for (const file of ['src/data/landingContent.ts', 'src/pages/About.tsx', 'src/pages/Home.tsx']) {
      expect(read(file)).not.toContain('media.githubusercontent.com')
    }
  })
})
