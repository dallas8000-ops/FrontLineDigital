import { test, expect } from '@playwright/test'

test('home page loads portfolio-first hero and links to services', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('heading', { name: /My portfolio is what I deliver/i })).toBeVisible()
  await expect(page.getByRole('heading', { name: /What I build — proven in production/i })).toBeVisible()
  await page.getByRole('navigation').getByRole('link', { name: 'Services' }).click()
  await expect(page).toHaveURL(/\/services$/)
  await expect(page.getByRole('heading', { name: /Defined by what is already in production/i })).toBeVisible()
})

test('pc checker detail page exposes details, repo link, and disabled hosted action', async ({ page }) => {
  await page.goto('/projects/pc-checker')

  await expect(page.getByRole('heading', { name: 'PC Checker' })).toBeVisible()
  await expect(page.getByRole('link', { name: /Request a Demo/i })).toHaveAttribute('href', '/contact')
  await expect(page.getByRole('button', { name: 'Hosted App Not Available' })).toBeDisabled()
  await expect(page.getByText(/Any optional cloud mirror is a read-only viewer/i)).toBeVisible()
})

test('contact form shows client-side validation errors', async ({ page }) => {
  await page.goto('/contact')

  await page.getByRole('button', { name: /Send Message/i }).click()
  await expect(page.getByText('Name is required.')).toBeVisible()
  await expect(page.getByText('Email is required.')).toBeVisible()
  await expect(page.getByText('Please select a subject.')).toBeVisible()
  await expect(page.getByText('Message is required.')).toBeVisible()
})

test('unknown routes render the 404 page', async ({ page }) => {
  await page.goto('/this-route-does-not-exist')

  await expect(page.getByRole('heading', { name: 'Page Not Found' })).toBeVisible()
  await expect(page.getByText("The page you're looking for doesn't exist or has been moved.")).toBeVisible()
})
