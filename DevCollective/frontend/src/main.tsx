import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { AuthProvider } from './context/AuthContext'
import '@fontsource-variable/inter'
import './styles/globals.css'

const container = document.getElementById('root')!
const app = (
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
)

// Prerendered pages (scripts/prerender.mjs) are hydrated so the server markup stays on screen instead of
// being torn down and repainted when the bundle loads. Anything else (client-only shells) renders fresh.
const path = window.location.pathname === '/' ? '/' : window.location.pathname.replace(/\/+$/, '')
if (container.dataset.prerendered === path) {
  ReactDOM.hydrateRoot(container, app)
} else {
  ReactDOM.createRoot(container).render(app)
}
