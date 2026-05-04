import express, { Express, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { Pool } from 'pg'
import nodemailer from 'nodemailer'
import rateLimit from 'express-rate-limit'
import authRoutes from './routes/authRoutes'

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

// Rate limiter — max 5 contact submissions per IP per 15 minutes
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many requests. Please wait before sending again.' },
})

// Health Check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() })
})

// Contact Form
app.post('/api/contact', contactLimiter, async (req: Request, res: Response) => {
  const { name, email, subject, message } = req.body
  if (!name || !email || !subject || !message) {
    res.status(400).json({ success: false, message: 'All fields are required.' })
    return
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER || 'dallas8000@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"Dev Collective Contact" <${process.env.GMAIL_USER || 'dallas8000@gmail.com'}>`,
      to: 'dallas8000@gmail.com',
      replyTo: email,
      subject: `[Contact Form] ${subject} — from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    })

    res.json({ success: true, message: 'Message received.' })
  } catch (err) {
    console.error('Contact email error:', err)
    res.status(500).json({ success: false, message: 'Failed to send message. Please try again.' })
  }
})

// Suppress browser DevTools discovery requests (Chrome 127+)
app.get('/.well-known/*', (req: Request, res: Response) => {
  res.status(404).json({ error: 'Not Found' })
})

// Routes
app.use('/api/auth', authRoutes)

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`)
  console.log(`📚 API available at http://localhost:${port}/api`)
})
