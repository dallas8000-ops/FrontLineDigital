import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'GitHub', path: '/dashboard' },
    { label: 'Marketplace', path: '/marketplace' },
    { label: 'Profile', path: '/profile' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="bg-white shadow-elevation-1 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img 
              src="/images/logos/frontline-digital-logo.png" 
              alt="Frontline Digital" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-primary-600 hidden sm:inline">Dev Collective</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-primary-600 border-b-2 border-primary-500 pb-0.5'
                    : 'text-dark-700 hover:text-primary-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/profile" className="btn btn-outline">View CV</Link>
            <Link to="/contact" className="btn btn-primary">Hire Me</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-dark-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-dark-200">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-4 py-2 text-dark-700 hover:bg-primary-50 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 py-4 flex gap-2">
              <Link to="/profile" className="btn btn-outline flex-1" onClick={() => setIsOpen(false)}>View CV</Link>
              <Link to="/contact" className="btn btn-primary flex-1" onClick={() => setIsOpen(false)}>Hire Me</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
