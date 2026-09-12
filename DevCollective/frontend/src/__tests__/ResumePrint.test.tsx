import React from 'react'
import { render, screen } from '@testing-library/react'
import ResumePrint from '../pages/ResumePrint'

describe('print resume', () => {
  it('uses current recruiter-facing facts and focused project proof', () => {
    const { container } = render(<ResumePrint />)

    expect(screen.getByRole('heading', { name: 'Barney R. Gilliom' })).toBeInTheDocument()
    expect(screen.getByText(/\(656\) 245-5253/)).toBeInTheDocument()
    expect(screen.getByText(/Wimauma, FL 33598/)).toBeInTheDocument()
    expect(screen.getByText(/U\.S\. citizen/)).toBeInTheDocument()
    expect(screen.getByText(/Available for U\.S\. remote work/)).toBeInTheDocument()
    expect(screen.getByText('AI Software Operations Studio')).toBeInTheDocument()
    expect(screen.getByText('DBOps Control Center')).toBeInTheDocument()
    expect(screen.getByText('RigHand AI')).toBeInTheDocument()
    expect(container.textContent).not.toContain('onrender.com')
  })
})