import { Request, Response } from 'express'
import { pool } from '../server'

export const getProjects = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(
      `SELECT projects.*, users.username, users.avatar_url 
       FROM projects 
       JOIN users ON projects.owner_id = users.id 
       ORDER BY projects.created_at DESC`
    )

    res.json({ success: true, projects: result.rows })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Error fetching projects' })
  }
}

export const getProjectById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await pool.query(
      `SELECT projects.*, users.username, users.avatar_url 
       FROM projects 
       JOIN users ON projects.owner_id = users.id 
       WHERE projects.id = $1`,
      [id]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Project not found' })
    }

    res.json({ success: true, project: result.rows[0] })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Error fetching project' })
  }
}

export const createProject = async (req: Request, res: Response) => {
  try {
    const { owner_id, title, description, category, budget, start_date, end_date } = req.body

    const result = await pool.query(
      `INSERT INTO projects (owner_id, title, description, category, budget, start_date, end_date) 
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [owner_id, title, description, category, budget, start_date, end_date]
    )

    res.status(201).json({ success: true, project: result.rows[0] })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Error creating project' })
  }
}

export const getProjectTeam = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await pool.query(
      `SELECT team_members.*, users.username, users.avatar_url, users.email 
       FROM team_members 
       JOIN users ON team_members.user_id = users.id 
       WHERE team_members.project_id = $1`,
      [id]
    )

    res.json({ success: true, team: result.rows })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Error fetching team' })
  }
}
