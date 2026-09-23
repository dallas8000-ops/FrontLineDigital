// Pure helpers for the contact form. No import.meta / browser APIs here so Jest can test them directly.

export const PILOT_SUBJECTS = [
  'Fleet operations pilot',
  'Payments & reconciliation pilot',
  'Business automation pilot',
] as const

export const COMPANY_SIZES = ['1–10', '11–50', '51–200', '200+'] as const
export const CURRENT_PROCESS = ['Spreadsheets', 'Paper', 'WhatsApp / email', 'Existing software', 'Several systems'] as const

/** Maps ?topic= from homepage links to a subject option; unknown values fall back to empty. */
export function subjectFromTopic(topic: string | null): string {
  if (!topic) return ''
  if (topic === 'pilot') return 'Business automation pilot'
  return (PILOT_SUBJECTS as readonly string[]).includes(topic) ? topic : ''
}

/** Prepends the optional qualification answers to the free-text message. */
export function composeMessage(message: string, company: string, size: string, process: string): string {
  const lines = [
    company.trim() && `Company: ${company.trim()}`,
    size && `Company size: ${size}`,
    process && `Handled today with: ${process}`,
  ].filter(Boolean)
  return lines.length ? `${lines.join('\n')}\n\n${message}` : message
}

/** mailto: fallback used when no email provider is configured. Everything is URI-encoded. */
export function buildMailto(to: string, subject: string, name: string, email: string, body: string): string {
  const fullBody = `From: ${name} <${email}>\n\n${body}`
  return `mailto:${to}?subject=${encodeURIComponent(`[Website] ${subject}`)}&body=${encodeURIComponent(fullBody)}`
}
