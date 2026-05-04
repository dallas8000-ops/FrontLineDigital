import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import BackToTop from './components/BackToTop'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './pages/Home'
import Services from './pages/Services'
import Dashboard from './pages/Dashboard'
import Marketplace from './pages/Marketplace'
import Profile from './pages/Profile'
import About from './pages/About'
import Contact from './pages/Contact'
import PCChecker from './pages/PCChecker'
import NotFound from './pages/NotFound'
import './styles/globals.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-dark-50">
        <Navigation />
        <main className="flex-grow">
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects/pc-checker" element={<PCChecker />} />
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
