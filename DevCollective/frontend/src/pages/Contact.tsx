import React, { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { usePageTitle } from '../utils/usePageTitle'

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
    const allTouched = { name: true, email: true, subject: true, message: true }
    setTouched(allTouched)
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
    `w-full border rounded-lg px-4 py-3 text-dark-900 placeholder-dark-400 focus:outline-none focus:ring-2 focus:border-transparent ${
      touched[field] && errors[field]
        ? 'border-red-400 focus:ring-red-400 bg-red-50'
        : 'border-dark-200 focus:ring-primary-500'
    }`

  return (
    <div className="min-h-screen bg-dark-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h1 className="mb-4">Get In Touch</h1>
          <p className="text-xl text-white/80">
            Available for national and international engagements — remote or on-site. Open to relocation.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section max-w-2xl mx-auto">
        <div className="card">
          {status === 'success' ? (
            <div className="text-center py-12">
              <CheckCircle size={56} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-dark-900 mb-2">Message Sent!</h3>
              <p className="text-dark-600 mb-6">Thanks for reaching out. I'll get back to you as soon as possible.</p>
              <button onClick={() => setStatus('idle')} className="btn btn-primary">Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-dark-800 mb-2">Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Jane Smith"
                    className={fieldClass('name')}
                  />
                  {touched.name && errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-dark-800 mb-2">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="jane@company.com"
                    className={fieldClass('email')}
                  />
                  {touched.email && errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-dark-800 mb-2">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={fieldClass('subject')}
                >
                  <option value="">Select a subject...</option>
                  <option value="Full Stack Development">Full Stack Development</option>
                  <option value="QA / Test Automation">QA / Test Automation</option>
                  <option value="API Development">API Development</option>
                  <option value="Contract / Freelance Work">Contract / Freelance Work</option>
                  <option value="Full-Time Opportunity">Full-Time Opportunity</option>
                  <option value="Other">Other</option>
                </select>
                {touched.subject && errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-dark-800 mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell me about your project or opportunity..."
                  className={`${fieldClass('message')} resize-none`}
                />
                {touched.message && errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm">
                  <AlertCircle size={16} />
                  Something went wrong. Please try again or email me directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn btn-primary w-full flex items-center justify-center gap-2 text-base"
              >
                {status === 'sending' ? (
                  <>Sending...</>
                ) : (
                  <><Send size={18} /> Send Message</>
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
