import { Request, Response } from 'express'
import { pool } from '../server'

export const getMarketplaceListing = async (req: Request, res: Response) => {
  try {
    const { experience_level, availability } = req.query

    let query = `SELECT marketplace_listings.*, users.username, users.avatar_url, users.location
       FROM marketplace_listings 
       JOIN users ON marketplace_listings.developer_id = users.id 
       WHERE 1=1`
    const params: any[] = []

    if (experience_level) {
      query += ` AND marketplace_listings.experience_level = $${params.length + 1}`
      params.push(experience_level)
    }

    if (availability) {
      query += ` AND marketplace_listings.availability = $${params.length + 1}`
      params.push(availability)
    }

    query += ` ORDER BY marketplace_listings.is_featured DESC, marketplace_listings.created_at DESC`

    const result = await pool.query(query, params)
    res.json({ success: true, listings: result.rows })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Error fetching marketplace listings' })
  }
}

export const createMarketplaceListing = async (req: Request, res: Response) => {
  try {
    const { developer_id, title, description, hourly_rate, skills, experience_level, availability } = req.body

    const result = await pool.query(
      `INSERT INTO marketplace_listings (developer_id, title, description, hourly_rate, skills, experience_level, availability) 
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [developer_id, title, description, hourly_rate, skills, experience_level, availability]
    )

    res.status(201).json({ success: true, listing: result.rows[0] })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Error creating marketplace listing' })
  }
}

export const updateMarketplaceListing = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { title, description, hourly_rate, skills, experience_level, availability, is_featured } = req.body

    const result = await pool.query(
      `UPDATE marketplace_listings SET title = $1, description = $2, hourly_rate = $3, skills = $4, experience_level = $5, availability = $6, is_featured = $7, updated_at = CURRENT_TIMESTAMP
       WHERE id = $8 RETURNING *`,
      [title, description, hourly_rate, skills, experience_level, availability, is_featured, id]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Listing not found' })
    }

    res.json({ success: true, listing: result.rows[0] })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Error updating marketplace listing' })
  }
}
