import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { contactInfo } from '../data/landingContent'
import { business } from '../data/freelanceContent'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/dashboard' },
  { label: 'Resume', path: '/profile' },
  { label: 'Contact', path: '/contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-brand-navy">
      <div className="brand-line-top" />
      <div className="section-inner py-4 md:py-5">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <Link to="/" className="flex items-start gap-4 group">
            <img
              src="/images/logos/frontline-digital-logo.png"
              alt={business.name}
              className="h-12 md:h-14 w-auto object-contain"
            />
            <div className="pt-1">
              <p className="text-white/90 text-[10px] md:text-xs font-semibold uppercase tracking-[0.15em] leading-snug max-w-[240px]">
                {business.tagline}
              </p>
            </div>
          </Link>

          <address className="not-italic text-right text-xs md:text-sm text-brand-muted leading-relaxed hidden sm:block">
            <a href={contactInfo.phoneHref} className="block text-white/90 hover:text-brand-gold transition-colors">
              {contactInfo.phone}
            </a>
            <a href={contactInfo.emailHref} className="block hover:text-brand-gold transition-colors">
              {contactInfo.email}
            </a>
            <span className="block">{contactInfo.location}</span>
          </address>
        </div>
      </div>
      <div className="brand-line-thin" />

      <nav className="section-inner py-2 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                location.pathname === item.path ? 'text-brand-gold' : 'text-brand-muted hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/#pricing" className="btn btn-ghost text-xs py-2 px-4">
            Pricing
          </Link>
          <Link to="/contact" className="btn btn-primary text-xs py-2 px-5">
            Hire Me
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-brand-muted hover:text-white"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-brand-line bg-brand-card">
          <div className="section-inner py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2.5 text-sm font-medium uppercase tracking-wide ${
                  location.pathname === item.path ? 'text-brand-gold' : 'text-brand-muted'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/#pricing"
              className="block py-2.5 text-sm font-medium uppercase tracking-wide text-brand-muted"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <address className="not-italic text-sm text-brand-muted pt-4 border-t border-brand-line">
              <a href={contactInfo.phoneHref} className="block text-white/90 py-1">
                {contactInfo.phone}
              </a>
              <a href={contactInfo.emailHref} className="block py-1">
                {contactInfo.email}
              </a>
              <span className="block py-1">{contactInfo.location}</span>
            </address>
            <Link to="/contact" className="btn btn-primary w-full mt-4" onClick={() => setIsOpen(false)}>
              Hire Me
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
