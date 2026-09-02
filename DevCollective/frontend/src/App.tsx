import React, { useEffect } from 'react'
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
import CaseStudyPage from './pages/CaseStudyPage'
import LiveDemoRedirect from './components/LiveDemoRedirect'
import NotFound from './pages/NotFound'
import { portfolioLiveUrls } from './data/portfolioLiveUrls'
import AdminPanel from './pages/AdminPanel'
import AdminLogin from './pages/AdminLogin'
import './styles/globals.css'
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
              <Route path="/case-studies/ai-software-operations-studio" element={<CaseStudyPage slug="ai-software-operations-studio" />} />
              <Route path="/case-studies/ai-memory-engine" element={<CaseStudyPage slug="ai-memory-engine" />} />
              <Route path="/case-studies/deployment-stripe-automation-center" element={<CaseStudyPage slug="deployment-stripe-automation-center" />} />
              <Route path="/case-studies/elite-fintech" element={<CaseStudyPage slug="elite-fintech" />} />
              <Route path="/case-studies/eastbridge" element={<CaseStudyPage slug="eastbridge" />} />
              <Route path="/case-studies/agripay" element={<CaseStudyPage slug="agripay" />} />
              <Route path="/case-studies/dbops" element={<CaseStudyPage slug="dbops" />} />
              <Route path="/case-studies/righand" element={<CaseStudyPage slug="righand" />} />
              <Route path="/case-studies/kistie-store" element={<CaseStudyPage slug="kistie-store" />} />
              <Route path="/case-studies/silverfox" element={<CaseStudyPage slug="silverfox" />} />
              <Route path="/case-studies/react-store-catalog" element={<CaseStudyPage slug="react-store-catalog" />} />
              <Route path="/case-studies/pc-checker-extreme" element={<CaseStudyPage slug="pc-checker-extreme" />} />
              <Route path="/case-studies/specwright" element={<CaseStudyPage slug="specwright" />} />
              <Route path="/case-studies/enpowercommand" element={<CaseStudyPage slug="enpowercommand" />} />
              <Route path="/case-studies/digital-sales-automation-center" element={<CaseStudyPage slug="digital-sales-automation-center" />} />
              <Route
                path="/deployment-stripe-automation-center"
                element={
                  <LiveDemoRedirect
                    url={portfolioLiveUrls.automationCenter}
                    label="Deployment & Stripe Automation Center"
                  />
                }
              />
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
