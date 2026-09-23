import emailjs from '@emailjs/browser'
import { buildMailto } from './contactForm'

// The site is served as static files (serve -s dist): there is no /api/contact backend.
// A POST there returns index.html with 200, which previously showed "Message sent" while
// nothing was delivered. Delivery now goes through EmailJS when configured, otherwise mailto.

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined

export type DeliveryResult = 'sent' | 'mailto'

export interface ContactPayload {
  name: string
  email: string
  subject: string
  message: string
}

export const emailProviderConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

export async function deliverContact(payload: ContactPayload, fallbackTo: string): Promise<DeliveryResult> {
  if (emailProviderConfigured) {
    // Throws on any non-200 from EmailJS, so the caller shows the error state instead of a false success.
    await emailjs.send(
      SERVICE_ID as string,
      TEMPLATE_ID as string,
      {
        from_name: payload.name,
        reply_to: payload.email,
        subject: payload.subject,
        message: payload.message,
      },
      { publicKey: PUBLIC_KEY as string },
    )
    return 'sent'
  }
  window.location.href = buildMailto(fallbackTo, payload.subject, payload.name, payload.email, payload.message)
  return 'mailto'
}
