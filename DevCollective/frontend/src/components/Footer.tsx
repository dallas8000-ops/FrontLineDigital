import React from 'react'
import { Link } from 'react-router-dom'
import { Github, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white mt-24">
      <div className="section">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <img 
              src="/images/logos/frontline-digital-logo.png" 
              alt="Frontline Digital" 
              className="h-10 w-auto mb-4"
            />
            <p className="text-dark-300 text-sm">
              Building tomorrow's solutions, today.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="text-dark-300 hover:text-white">Services</Link></li>
              <li><Link to="/dashboard" className="text-dark-300 hover:text-white">GitHub Activity</Link></li>
              <li><Link to="/marketplace" className="text-dark-300 hover:text-white">Marketplace</Link></li>
              <li><Link to="/profile" className="text-dark-300 hover:text-white">Profile / CV</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/dallas8000-ops" target="_blank" rel="noopener noreferrer" className="text-dark-300 hover:text-white">GitHub</a></li>
              <li><Link to="/about" className="text-dark-300 hover:text-white">About</Link></li>
              <li><Link to="/contact" className="text-dark-300 hover:text-white">Contact / Support</Link></li>
              <li><Link to="/contact" className="text-dark-300 hover:text-white">Hire Me</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/dallas8000-ops" target="_blank" rel="noopener noreferrer" className="text-dark-300 hover:text-accent-500 transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              {/* LinkedIn icon/link removed */}
              <Link to="/contact" className="text-dark-300 hover:text-accent-500 transition-colors" aria-label="Contact">
                <Mail size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-dark-300">
            <p>&copy; {new Date().getFullYear()} Frontline Digital — Barney R. Gilliom. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="text-dark-500">Built with React · TypeScript · Django</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
