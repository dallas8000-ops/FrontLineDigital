import { Router, Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { pool } from '../server'

const router = Router()
const JWT_SECRET = process.env.JWT_SECRET || 'change-me-in-production'
const JWT_EXPIRES_IN = '7d'

// POST /api/auth/register
router.post('/register', async (req: Request, res: Response) => {
  const { name, email, password } = req.body as { name?: string; email?: string; password?: string }

  if (!name || !email || !password) {
    res.status(400).json({ success: false, message: 'name, email and password are required' })
    return
  }
  if (password.length < 8) {
    res.status(400).json({ success: false, message: 'Password must be at least 8 characters' })
    return
  }

  try {
    const existing = await pool.query('SELECT id FROM users WHERE email = $1', [email.toLowerCase()])
    if (existing.rows.length > 0) {
      res.status(409).json({ success: false, message: 'Email already registered' })
      return
    }

    const passwordHash = await bcrypt.hash(password, 12)
    const result = await pool.query(
      'INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING id, name, email, created_at',
      [name.trim(), email.toLowerCase(), passwordHash]
    )
    const user = result.rows[0]
    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })

    res.status(201).json({ success: true, token, user: { id: user.id, name: user.name, email: user.email } })
  } catch (err) {
    console.error('[auth/register]', err)
    res.status(500).json({ success: false, message: 'Registration failed' })
  }
})

// POST /api/auth/login
router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body as { email?: string; password?: string }

  if (!email || !password) {
    res.status(400).json({ success: false, message: 'email and password are required' })
    return
  }

  try {
    const result = await pool.query(
      'SELECT id, name, email, password_hash FROM users WHERE email = $1',
      [email.toLowerCase()]
    )
    const user = result.rows[0]

    if (!user || !(await bcrypt.compare(password, user.password_hash))) {
      res.status(401).json({ success: false, message: 'Invalid email or password' })
      return
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })
    res.json({ success: true, token, user: { id: user.id, name: user.name, email: user.email } })
  } catch (err) {
    console.error('[auth/login]', err)
    res.status(500).json({ success: false, message: 'Login failed' })
  }
})

// GET /api/auth/me  (protected)
router.get('/me', async (req: Request, res: Response) => {
  // authenticateToken middleware must be applied at router level when needed
  const authHeader = req.headers['authorization']
  const token = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null
  if (!token) {
    res.status(401).json({ success: false, message: 'Not authenticated' })
    return
  }
  try {
    const payload = jwt.verify(token, JWT_SECRET) as { userId: number; email: string }
    const result = await pool.query('SELECT id, name, email, created_at FROM users WHERE id = $1', [payload.userId])
    const user = result.rows[0]
    if (!user) {
      res.status(404).json({ success: false, message: 'User not found' })
      return
    }
    res.json({ success: true, user })
  } catch {
    res.status(403).json({ success: false, message: 'Invalid token' })
  }
})

export default router
