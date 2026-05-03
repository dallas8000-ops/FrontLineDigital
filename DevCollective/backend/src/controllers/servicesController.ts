import { Request, Response } from 'express'
import { pool } from '../server'

export const getServices = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(
      `SELECT services.*, users.username, users.avatar_url 
       FROM services 
       JOIN users ON services.user_id = users.id 
       WHERE services.status = 'active' 
       ORDER BY services.created_at DESC`
    )

    res.json({ success: true, services: result.rows })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Error fetching services' })
  }
}

export const getServiceById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await pool.query(
      `SELECT services.*, users.username, users.avatar_url 
       FROM services 
       JOIN users ON services.user_id = users.id 
       WHERE services.id = $1`,
      [id]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Service not found' })
    }

    res.json({ success: true, service: result.rows[0] })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Error fetching service' })
  }
}

export const createService = async (req: Request, res: Response) => {
  try {
    const { user_id, title, description, price, hourly_rate, category, skills } = req.body

    const result = await pool.query(
      `INSERT INTO services (user_id, title, description, price, hourly_rate, category, skills) 
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [user_id, title, description, price, hourly_rate, category, skills]
    )

    res.status(201).json({ success: true, service: result.rows[0] })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Error creating service' })
  }
}

export const updateService = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { title, description, price, hourly_rate, category, skills, status } = req.body

    const result = await pool.query(
      `UPDATE services SET title = $1, description = $2, price = $3, hourly_rate = $4, category = $5, skills = $6, status = $7, updated_at = CURRENT_TIMESTAMP
       WHERE id = $8 RETURNING *`,
      [title, description, price, hourly_rate, category, skills, status, id]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Service not found' })
    }

    res.json({ success: true, service: result.rows[0] })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Error updating service' })
  }
}
