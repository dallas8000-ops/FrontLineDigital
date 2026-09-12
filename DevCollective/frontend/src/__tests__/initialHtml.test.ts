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
})