import React from 'react'
import { Link } from 'react-router-dom'
import { contactInfo } from '../data/landingContent'
import { business } from '../data/freelanceContent'

const footerLinks = [
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/dashboard' },
  { label: 'Resume', path: '/profile' },
  { label: 'Pricing', path: '/#pricing' },
  { label: 'Contact', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-navy mt-auto">
      <div className="brand-line-thin" />
      <div className="section-inner py-10 md:py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <Link to="/">
              <img
                src="/images/logos/frontline-digital-logo.svg"
                alt={business.name}
                className="h-10 w-auto object-contain mb-4"
              />
            </Link>
            <p className="text-slate-200 text-sm leading-relaxed max-w-xs">
              Internal tools and operations dashboards — secure, audited, and production-ready. Scope and quality
              proven by live, inspectable products, built solo from design through deployment.
            </p>
          </div>

          <div>
            <h3 className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">Explore</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-brand-muted text-sm hover:text-brand-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">Contact</h3>
            <address className="not-italic text-brand-muted text-sm leading-relaxed space-y-1">
              <span className="block text-white/90">{business.owner}</span>
              <span className="block">{contactInfo.location}</span>
              <a href={contactInfo.phoneHref} className="block hover:text-brand-gold transition-colors">
                {contactInfo.phone}
              </a>
              <a href={contactInfo.emailHref} className="block hover:text-brand-gold transition-colors">
                {contactInfo.email}
              </a>
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-line/60 flex flex-col sm:flex-row justify-between gap-3 text-xs text-brand-muted/80">
          <p>
            &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p>Production software · Zero-defect discipline · Tampa, FL</p>
        </div>
      </div>
      <div className="brand-line-thin" />
    </footer>
  )
}
