// Test the validate() function extracted from Contact.tsx logic
// We replicate the validation function here to test it in isolation

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

const empty: FormFields = { name: '', email: '', subject: '', message: '' }

describe('Contact form validate()', () => {
  it('returns all errors for empty form', () => {
    const errs = validate(empty)
    expect(errs.name).toBe('Name is required.')
    expect(errs.email).toBe('Email is required.')
    expect(errs.subject).toBe('Please select a subject.')
    expect(errs.message).toBe('Message is required.')
  })

  it('returns email error for invalid email format', () => {
    const errs = validate({ ...empty, email: 'not-an-email' })
    expect(errs.email).toBe('Enter a valid email address.')
  })

  it('accepts a valid email', () => {
    const errs = validate({ ...empty, email: 'user@example.com' })
    expect(errs.email).toBeUndefined()
  })

  it('returns message error when message is too short', () => {
    const errs = validate({ ...empty, message: 'Hi' })
    expect(errs.message).toBe('Message must be at least 20 characters.')
  })

  it('returns no errors for a fully valid form', () => {
    const errs = validate({
      name: 'Jane Smith',
      email: 'jane@example.com',
      subject: 'Full Stack Development',
      message: 'I would like to discuss a potential project with you.',
    })
    expect(Object.keys(errs)).toHaveLength(0)
  })
})
