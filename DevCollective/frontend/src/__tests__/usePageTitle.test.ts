import { renderHook, act } from '@testing-library/react'
import { usePageTitle } from '../utils/usePageTitle'

describe('usePageTitle', () => {
  beforeEach(() => {
    window.history.pushState({}, '', '/about')
    document.head.innerHTML = `
      <meta name="description" content="Home description" />
      <meta property="og:title" content="Home title" />
      <meta property="og:description" content="Home description" />
      <meta property="og:url" content="https://gilliomfrontlinedigital.com/" />
      <meta name="twitter:title" content="Home title" />
      <meta name="twitter:description" content="Home description" />
      <meta name="twitter:url" content="https://gilliomfrontlinedigital.com/" />
      <link rel="canonical" href="https://gilliomfrontlinedigital.com/" />
    `
  })

  it('sets document.title with the app suffix', () => {
    renderHook(() => usePageTitle('Home'))
    expect(document.title).toBe('Home | Frontline Digital')
  })

  it('updates title when title changes', () => {
    const { rerender } = renderHook(({ title }: { title: string }) => usePageTitle(title), {
      initialProps: { title: 'About' },
    })
    expect(document.title).toBe('About | Frontline Digital')

    rerender({ title: 'Services' })
    expect(document.title).toBe('Services | Frontline Digital')
  })

  it('updates canonical and social metadata for the current route', () => {
    renderHook(() => usePageTitle('About', 'About Barney Gilliom and Frontline Digital'))

    expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
      'https://gilliomfrontlinedigital.com/about'
    )
    expect(document.querySelector('meta[property="og:title"]')?.getAttribute('content')).toBe(
      'About | Frontline Digital'
    )
    expect(document.querySelector('meta[property="og:description"]')?.getAttribute('content')).toBe(
      'About Barney Gilliom and Frontline Digital'
    )
    expect(document.querySelector('meta[property="og:url"]')?.getAttribute('content')).toBe(
      'https://gilliomfrontlinedigital.com/about'
    )
    expect(document.querySelector('meta[name="twitter:title"]')?.getAttribute('content')).toBe(
      'About | Frontline Digital'
    )
    expect(document.querySelector('meta[name="twitter:url"]')?.getAttribute('content')).toBe(
      'https://gilliomfrontlinedigital.com/about'
    )
  })
})
