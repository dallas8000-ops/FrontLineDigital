import express, { Express, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 5000

// PostgreSQL Connection Pool
export const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME || 'dev_collective',
})

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Error Handler Middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack)
  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined,
  })
})

// Health Check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() })
})

// Suppress browser DevTools discovery requests (Chrome 127+)
app.get('/.well-known/*', (req: Request, res: Response) => {
  res.status(404).json({ error: 'Not Found' })
})

// Routes (will be added)
// TODO: Add authentication routes
// TODO: Add services routes
// TODO: Add projects routes
// TODO: Add marketplace routes

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`)
  console.log(`📚 API available at http://localhost:${port}/api`)
})
