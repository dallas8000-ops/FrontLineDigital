import React, { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { usePageTitle } from '../utils/usePageTitle'
import { contactInfo } from '../data/landingContent'
import { business } from '../data/freelanceContent'

type FormFields = { name: string; email: string; subject: string; message: string }
type FormErrors = Partial<FormFields>

function validate(form: FormFields): FormErrors {
  const errors: FormErrors = {}
  if (!form.name.trim()) errors.name = 'Name is required.'
  if (!form.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!form.subject) errors.subject = 'Please select a subject.'
  if (!form.message.trim()) {
    errors.message = 'Message is required.'
  } else if (form.message.trim().length < 20) {
    errors.message = 'Message must be at least 20 characters.'
  }
  return errors
}

export default function Contact() {
  usePageTitle('Contact')
  const [form, setForm] = useState<FormFields>({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const updated = { ...form, [e.target.name]: e.target.value }
    setForm(updated)
    if (touched[e.target.name as keyof FormFields]) {
      setErrors(validate(updated))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }))
    setErrors(validate(form))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({ name: true, email: true, subject: true, message: true })
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
        setTouched({})
        setErrors({})
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const fieldClass = (field: keyof FormFields) =>
    `w-full border rounded-lg px-4 py-3 bg-brand-navy text-white placeholder-brand-muted focus:outline-none focus:ring-2 focus:border-transparent ${
      touched[field] && errors[field]
        ? 'border-red-500 focus:ring-red-500/50'
        : 'border-brand-line focus:ring-brand-gold/50'
    }`

  return (
    <div className="bg-site-grid min-h-full">
      <section className="page-hero border-b border-brand-line">
        <div className="section-inner text-center max-w-2xl mx-auto">
          <p className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-2">Contact</p>
          <h1 className="mb-4 text-white">Start a conversation</h1>
          <p className="text-brand-muted text-lg leading-relaxed">
            Free 30-minute consultation for project scope, timeline, and a written estimate. Remote, on-site, and
            relocation considered.
          </p>
          <p className="text-slate-200 text-sm mt-6">
            <a href={contactInfo.phoneHref} className="hover:text-brand-gold">
              {contactInfo.phone}
            </a>
            {' · '}
            <a href={contactInfo.emailHref} className="hover:text-brand-gold">
              {contactInfo.email}
            </a>
          </p>
        </div>
      </section>

      <section className="section-inner py-16 max-w-2xl mx-auto">
        <div className="card-dark p-6 md:p-8">
          {status === 'success' ? (
            <div className="text-center py-12">
              <CheckCircle size={56} className="text-brand-gold mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Message sent</h3>
              <p className="text-brand-muted mb-6">Thanks — I will respond as soon as possible.</p>
              <button type="button" onClick={() => setStatus('idle')} className="btn btn-primary">
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-200 mb-2">
                    Full name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={fieldClass('name')}
                  />
                  {touched.name && errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-200 mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={fieldClass('email')}
                  />
                  {touched.email && errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-200 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={fieldClass('subject')}
                >
                  <option value="">Select a subject...</option>
                  <option value="New website project">New website project</option>
                  <option value="Full Stack Development">Full stack development</option>
                  <option value="QA / Test Automation">QA / test automation</option>
                  <option value="API Development">API development</option>
                  <option value="Contract / Freelance Work">Contract / freelance work</option>
                  <option value="Other">Other</option>
                </select>
                {touched.subject && errors.subject && (
                  <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-200 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Describe your project, timeline, and budget range..."
                  className={`${fieldClass('message')} resize-none`}
                />
                {touched.message && errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-300 bg-red-950/40 border border-red-800 rounded-lg px-4 py-3 text-sm">
                  <AlertCircle size={16} />
                  Something went wrong. Email me directly at {contactInfo.email}.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn btn-primary w-full flex items-center justify-center gap-2"
              >
                {status === 'sending' ? 'Sending...' : (
                  <>
                    <Send size={18} /> Send message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
        <p className="text-brand-muted text-xs text-center mt-6">{business.name} · {business.owner}</p>
      </section>
    </div>
  )
}
