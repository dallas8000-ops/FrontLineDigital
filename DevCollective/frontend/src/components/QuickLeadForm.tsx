import React, { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import { contactInfo } from '../data/landingContent'
import { deliverContact } from '../utils/contactDelivery'
import { validateLead, type LeadFields, type LeadErrors } from '../utils/contactForm'

/** Three-field pilot request on the home page; delivers through the same channel as /contact. */
export default function QuickLeadForm() {
  const [form, setForm] = useState<LeadFields>({ name: '', email: '', workflow: '' })
  const [errors, setErrors] = useState<LeadErrors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'mailto' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const found = validateLead(form)
    setErrors(found)
    if (Object.keys(found).length) return
    setStatus('sending')
    try {
      const result = await deliverContact(
        { name: form.name, email: form.email, subject: 'Business automation pilot', message: form.workflow },
        contactInfo.email,
      )
      setStatus(result)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent' || status === 'mailto') {
    return (
      <div className="py-6 text-center" role="status">
        <CheckCircle size={40} className="mx-auto mb-3 text-brand-gold" />
        <p className="font-semibold text-white">
          {status === 'sent' ? 'Thanks. I will reply within 1 day with a written scope and price.' : 'Your email app should have opened. Press send there.'}
        </p>
      </div>
    )
  }

  const field = 'w-full border border-brand-line bg-brand-navy px-3 py-2 text-sm text-white focus:border-brand-gold focus:outline-none'

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4" aria-label="Request a pilot">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-name" className="mb-1 block text-sm font-semibold text-slate-200">Name</label>
          <input id="lead-name" name="name" autoComplete="name" value={form.name} onChange={handleChange} className={field} />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="lead-email" className="mb-1 block text-sm font-semibold text-slate-200">Work email</label>
          <input id="lead-email" name="email" type="email" autoComplete="email" value={form.email} onChange={handleChange} className={field} />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="lead-workflow" className="mb-1 block text-sm font-semibold text-slate-200">
          Which workflow should come off spreadsheets?
        </label>
        <textarea id="lead-workflow" name="workflow" rows={3} value={form.workflow} onChange={handleChange} className={field} />
        {errors.workflow && <p className="mt-1 text-xs text-red-400">{errors.workflow}</p>}
      </div>
      {status === 'error' && (
        <p className="text-sm text-red-400">
          Sending failed. Email <a href={contactInfo.emailHref} className="underline">{contactInfo.email}</a> instead.
        </p>
      )}
      <button type="submit" className="btn btn-primary w-full justify-center" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Get a fixed scope and price'}
      </button>
    </form>
  )
}
