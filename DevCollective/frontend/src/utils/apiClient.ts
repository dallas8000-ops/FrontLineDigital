// API Base Configuration
// Dev: VITE_API_URL is empty → falls back to '/api' → Vite proxy forwards to localhost:5000
// Prod: VITE_API_URL=https://your-backend.onrender.com/api (set in .env.production)
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api'

function authHeaders(): Record<string, string> {
  const token = localStorage.getItem('access_token')
  return token ? { Authorization: `Bearer ${token}` } : {}
}

export const apiClient = {
  get: async (endpoint: string) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: { ...authHeaders() },
    })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    return response.json()
  },

  post: async (endpoint: string, data: unknown) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...authHeaders() },
      body: JSON.stringify(data),
    })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    return response.json()
  },

  put: async (endpoint: string, data: unknown) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', ...authHeaders() },
      body: JSON.stringify(data),
    })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    return response.json()
  },

  delete: async (endpoint: string) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'DELETE',
      headers: { ...authHeaders() },
    })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    return response.json()
  },
}
