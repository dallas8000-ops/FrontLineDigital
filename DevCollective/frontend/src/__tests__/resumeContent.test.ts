import { defaultExperience, defaultProfile, defaultSkills } from '../data/resumeContent'
import { business } from '../data/freelanceContent'

describe('default resume content', () => {
  it('reflects the current ATS-optimized resume', () => {
    expect(defaultProfile.profileTitle).toBe('Full-Stack Software Engineer')
    expect(defaultProfile.location).toBe('Wimauma, FL 33598 · Serving clients remotely worldwide')
    expect(defaultProfile.phone).toBe('(656) 245-5253')
    expect(defaultProfile.about).toContain('12 production applications')
    expect(defaultProfile.about).not.toContain('Seeking remote mid-level full-stack or QA automation roles.')
    expect(defaultExperience[0]).toMatchObject({
      role: 'Full-Stack Software Developer (Independent / Contract)',
      period: 'Sept 2025 – Present',
    })
    expect(defaultSkills.find((group) => group.category === 'Payments & AI')?.items).toContain('Stripe API')
    expect(business.location).toBe('Wimauma, FL | Serving clients remotely worldwide')
    expect(business.location).not.toContain('available for international roles')
    expect(business.portfolioSectionTitle).toContain('12')
  })
})