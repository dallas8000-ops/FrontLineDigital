import * as fs from 'fs'
import * as path from 'path'

describe('initial document HTML', () => {
  const html = fs.readFileSync(path.resolve(process.cwd(), 'index.html'), 'utf8')

  it('contains useful portfolio and resume content before JavaScript runs', () => {
    expect(html).toContain('Gilliom Frontline Digital')
    expect(html).toContain('Wimauma, Florida')
    expect(html).toContain('/profile')
    expect(html).toContain('/case-studies/dbops')
    expect(html).toContain('/case-studies/righand')
    expect(html).not.toContain('<div id="root"></div>')
  })

  it('publishes structured identity data for the resume owner', () => {
    expect(html).toContain('"@type": "Person"')
    expect(html).toContain('https://gilliomfrontlinedigital.com/profile')
    expect(html).toContain('Barney_Gilliom_Resume_v3.pdf')
  })

  it('does not publish a brittle total application count', () => {
    expect(html).not.toMatch(/\b(?:12|13) live (?:products|applications)\b/i)
  })

  it('uses a raster 1200x630 social preview image (Facebook/WhatsApp/X reject SVG og:image)', () => {
    const ogImage = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1]
    const twImage = html.match(/<meta name="twitter:image" content="([^"]+)"/)?.[1]
    expect(ogImage).toMatch(/\.(jpe?g|png)$/)
    expect(twImage).toBe(ogImage)
    expect(html).toContain('<meta property="og:image:width" content="1200" />')
    expect(html).toContain('<meta property="og:image:height" content="630" />')
    const localPath = new URL(ogImage!).pathname
    expect(fs.existsSync(path.resolve(process.cwd(), 'public', `.${localPath}`))).toBe(true)
  })

  it('does not advertise retired storefronts in JSON-LD', () => {
    expect(html).not.toContain('SilverFox')
    expect(html).not.toContain('React Store Catalog')
    expect(html).not.toContain('silverfox-production')
    expect(html).not.toContain('react-store-catalog')
  })
})