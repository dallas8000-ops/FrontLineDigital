import { renderHook, act } from '@testing-library/react'
import { usePageTitle } from '../utils/usePageTitle'

describe('usePageTitle', () => {
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
})
