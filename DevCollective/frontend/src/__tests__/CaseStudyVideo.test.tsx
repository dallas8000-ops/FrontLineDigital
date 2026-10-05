import React from 'react'
import * as fs from 'fs'
import * as path from 'path'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'
import CaseStudyPage from '../pages/CaseStudyPage'

const publicFile = (urlPath: string) => path.resolve(process.cwd(), 'public', `.${urlPath}`)
const renderPage = (slug: string) =>
  render(
    <MemoryRouter>
      <CaseStudyPage slug={slug} />
    </MemoryRouter>,
  )

describe('case study demo videos', () => {
  const withVideo = caseStudies.filter((cs) => cs.demoVideo)

  it('ships demo videos for AI Software Operations Studio and PC Checker Extreme', () => {
    expect(withVideo.map((cs) => cs.slug).sort()).toEqual(['ai-software-operations-studio', 'pc-checker-extreme'])
  })

  it.each(withVideo.map((cs) => [cs.slug, cs.demoVideo!] as const))(
    '%s video and poster are real files in public/ (not Git LFS pointers)',
    (_slug, v) => {
      for (const asset of [v.src, v.posterSrc]) {
        expect(fs.existsSync(publicFile(asset))).toBe(true)
      }
      // An LFS pointer is ~130 bytes of text; Railway would serve that instead of video.
      expect(fs.statSync(publicFile(v.src)).size).toBeGreaterThan(100_000)
      expect(fs.readFileSync(publicFile(v.src)).subarray(0, 40).toString()).not.toContain('git-lfs')
      // Keep the repo and visitors' data plans sane.
      expect(fs.statSync(publicFile(v.src)).size).toBeLessThan(15 * 1024 * 1024)
    },
  )

  it.each(withVideo.map((cs) => [cs.slug, cs.demoVideo!] as const))(
    '%s renders a lazy, inline, click-to-play video in the header',
    (slug, v) => {
      const { container } = renderPage(slug)
      const video = container.querySelector('#demo-video video') as HTMLVideoElement
      expect(video).not.toBeNull()
      expect(video.getAttribute('src')).toBe(v.src)
      expect(video.getAttribute('poster')).toBe(v.posterSrc)
      expect(video.getAttribute('preload')).toBe('none')
      expect(video.hasAttribute('controls')).toBe(true)
      expect(video.hasAttribute('playsinline')).toBe(true)
      expect(video.hasAttribute('autoplay')).toBe(false)
    },
  )

  it('case studies without a video render no player', () => {
    const plain = caseStudies.find((cs) => !cs.demoVideo)!
    const { container } = renderPage(plain.slug)
    expect(container.querySelector('video')).toBeNull()
  })

  it('.gitattributes exempts web videos from LFS', () => {
    const attrs = fs.readFileSync(path.resolve(process.cwd(), '.gitattributes'), 'utf8')
    expect(attrs).toMatch(/^public\/videos\/\*\.mp4 -filter -diff -merge binary$/m)
  })
})
