import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { AppShell } from './App'
import { AuthProvider } from './context/AuthContext'

/** Renders one route to HTML at build time (see scripts/prerender.mjs). */
export function render(url: string): string {
  return renderToString(
    <React.StrictMode>
      <AuthProvider>
        <StaticRouter location={url}>
          <AppShell />
        </StaticRouter>
      </AuthProvider>
    </React.StrictMode>,
  )
}
