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

export type LeadFields = { name: string; email: string; workflow: string }
export type LeadErrors = Partial<LeadFields>

/** Validation for the three-field pilot request on the home page. */
export function validateLead(form: LeadFields): LeadErrors {
  const errors: LeadErrors = {}
  if (!form.name.trim()) errors.name = 'Name is required.'
  if (!form.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (form.workflow.trim().length < 10) errors.workflow = 'Describe the workflow in a sentence or two.'
  return errors
}
