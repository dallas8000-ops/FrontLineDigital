import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'change-me-in-production'

export interface AuthRequest extends Request {
  userId?: number
  userEmail?: string
}

export function authenticateToken(req: AuthRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization']
  const token = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null

  if (!token) {
    res.status(401).json({ success: false, message: 'No token provided' })
    return
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET) as { userId: number; email: string }
    req.userId = payload.userId
    req.userEmail = payload.email
    next()
  } catch {
    res.status(403).json({ success: false, message: 'Invalid or expired token' })
  }
}
