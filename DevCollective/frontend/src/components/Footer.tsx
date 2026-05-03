import React from 'react'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

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
              <li><a href="#" className="text-dark-300 hover:text-white">Services</a></li>
              <li><a href="#" className="text-dark-300 hover:text-white">Dashboard</a></li>
              <li><a href="#" className="text-dark-300 hover:text-white">Marketplace</a></li>
              <li><a href="#" className="text-dark-300 hover:text-white">Profile</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-dark-300 hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-dark-300 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-dark-300 hover:text-white">Support</a></li>
              <li><a href="#" className="text-dark-300 hover:text-white">Privacy</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-dark-300 hover:text-accent-500 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-dark-300 hover:text-accent-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-dark-300 hover:text-accent-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-dark-300 hover:text-accent-500 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-dark-300">
            <p>&copy; 2026 Frontline Digital. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
