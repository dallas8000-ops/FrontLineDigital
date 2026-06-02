import React from 'react'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import { usePageTitle } from '../utils/usePageTitle'

export default function NotFound() {
  usePageTitle('Page Not Found')
  return (
    <div className="min-h-[60vh] bg-site-grid flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-8xl font-black text-brand-gold/20 mb-4">404</p>
        <h1 className="text-3xl font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-brand-muted mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center">
          <button onClick={() => window.history.back()} className="btn btn-outline flex items-center gap-2">
            <ArrowLeft size={16} /> Go Back
          </button>
          <Link to="/" className="btn btn-primary flex items-center gap-2">
            <Home size={16} /> Home
          </Link>
        </div>
      </div>
    </div>
  )
}
