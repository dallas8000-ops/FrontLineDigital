import { Request, Response } from 'express'
import { pool } from '../server'

interface User {
  id: number
  email: string
  username: string
  first_name: string
  last_name: string
  avatar_url: string
  bio: string
  location: string
  phone: string
  user_type: string
}

export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id])
    
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'User not found' })
    }

    res.json({ success: true, user: result.rows[0] })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Error fetching user' })
  }
}

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { first_name, last_name, bio, location, phone, avatar_url } = req.body

    const result = await pool.query(
      `UPDATE users SET first_name = $1, last_name = $2, bio = $3, location = $4, phone = $5, avatar_url = $6, updated_at = CURRENT_TIMESTAMP
       WHERE id = $7 RETURNING *`,
      [first_name, last_name, bio, location, phone, avatar_url, id]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'User not found' })
    }

    res.json({ success: true, user: result.rows[0] })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Error updating user' })
  }
}

export const getUserReviews = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await pool.query(
      `SELECT reviews.*, reviewers.username as reviewer_name 
       FROM reviews 
       JOIN users reviewers ON reviews.reviewer_id = reviewers.id 
       WHERE reviews.reviewee_id = $1 
       ORDER BY reviews.created_at DESC`,
      [id]
    )

    res.json({ success: true, reviews: result.rows })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Error fetching reviews' })
  }
}
