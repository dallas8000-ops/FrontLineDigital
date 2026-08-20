import { defaultExperience, defaultProfile, defaultSkills } from '../data/resumeContent'
import { business } from '../data/freelanceContent'

describe('default resume content', () => {
  it('reflects the current ATS-optimized resume', () => {
    expect(defaultProfile.profileTitle).toBe('Full-Stack Software Engineer')
    expect(defaultProfile.location).toBe('Wimauma, FL 33598 · U.S. Citizen · Open to remote roles')
    expect(defaultProfile.phone).toBe('(656) 245-5253')
    expect(defaultProfile.about).toContain('12 production applications')
    expect(defaultExperience[0]).toMatchObject({
      role: 'Full-Stack Software Developer (Independent / Contract)',
      period: 'Sept 2025 – Present',
    })
    expect(defaultSkills.find((group) => group.category === 'Payments & AI')?.items).toContain('Stripe API')
    expect(business.location).toContain('Wimauma, FL')
    expect(business.portfolioSectionTitle).toContain('12')
  })
})