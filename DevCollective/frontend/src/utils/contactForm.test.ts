import { subjectFromTopic, composeMessage, buildMailto, PILOT_SUBJECTS } from './contactForm'

describe('subjectFromTopic', () => {
  it('maps the generic pilot topic to the business automation pilot', () => {
    expect(subjectFromTopic('pilot')).toBe('Business automation pilot')
  })

  it.each(PILOT_SUBJECTS)('accepts the exact pilot subject %s from homepage links', (s) => {
    expect(subjectFromTopic(s)).toBe(s)
  })

  it('rejects unknown or injected topics instead of trusting the query string', () => {
    expect(subjectFromTopic(null)).toBe('')
    expect(subjectFromTopic('<script>alert(1)</script>')).toBe('')
    expect(subjectFromTopic('Other')).toBe('')
  })
})

describe('composeMessage', () => {
  it('returns the message untouched when no qualification answers are given', () => {
    expect(composeMessage('Need a fuel log dashboard', '', '', '')).toBe('Need a fuel log dashboard')
  })

  it('prepends only the answers that were filled in', () => {
    expect(composeMessage('Body', '  Acme Haulage ', '', 'Spreadsheets')).toBe(
      'Company: Acme Haulage\nHandled today with: Spreadsheets\n\nBody',
    )
  })
})

describe('buildMailto', () => {
  it('URI-encodes subject and body so special characters cannot break the link', () => {
    const url = buildMailto('me@example.com', 'Fleet & ops', 'A&B', 'a@b.co', 'line1\nx=1&y=2')
    expect(url.startsWith('mailto:me@example.com?subject=')).toBe(true)
    const params = new URLSearchParams(url.split('?')[1])
    expect(params.get('subject')).toBe('[Website] Fleet & ops')
    expect(params.get('body')).toBe('From: A&B <a@b.co>\n\nline1\nx=1&y=2')
    expect(url.split('&').length).toBe(2)
  })
})
