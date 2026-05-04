import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import { apiClient } from '../utils/apiClient'

interface User {
  id: number
  name: string
  email: string
}

interface AuthContextValue {
  user: User | null
  token: string | null
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('access_token'))
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('auth_user')
    return stored ? (JSON.parse(stored) as User) : null
  })

  const persist = (newToken: string, newUser: User) => {
    localStorage.setItem('access_token', newToken)
    localStorage.setItem('auth_user', JSON.stringify(newUser))
    setToken(newToken)
    setUser(newUser)
  }

  const login = useCallback(async (email: string, password: string) => {
    const data = await apiClient.post('/auth/login', { email, password }) as { token: string; user: User }
    persist(data.token, data.user)
  }, [])

  const register = useCallback(async (name: string, email: string, password: string) => {
    const data = await apiClient.post('/auth/register', { name, email, password }) as { token: string; user: User }
    persist(data.token, data.user)
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('auth_user')
    setToken(null)
    setUser(null)
  }, [])

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout, isAuthenticated: !!token }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
