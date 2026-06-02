import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import BackToTop from './components/BackToTop'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './pages/Home'
import Services from './pages/Services'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import About from './pages/About'
import Contact from './pages/Contact'
import PCChecker from './pages/PCChecker'
import NotFound from './pages/NotFound'
import AdminPanel from './pages/AdminPanel'
import AdminLogin from './pages/AdminLogin'
import './styles/globals.css'
import { useEffect } from 'react'
import { applyColorScheme } from './utils/colorScheme'


// Protect /admin route as a valid React component
function ProtectedAdmin() {
  const stored = typeof window !== 'undefined' ? localStorage.getItem('adminAuth') : null;
  const isAuthed = stored && sessionStorage.getItem('adminAuthed') === 'true';
  if (!isAuthed) {
    return <Navigate to="/admin-login" replace />;
  }
  return <AdminPanel />;
}

function App() {
  useEffect(() => {
    applyColorScheme()
  }, [])
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-brand-navy">
        <Navigation />
        <main className="flex-grow">
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/marketplace" element={<Navigate to="/about" replace />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects/pc-checker" element={<PCChecker />} />
              <Route path="/admin" element={<ProtectedAdmin />} />
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ErrorBoundary>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  )
}

export default App
