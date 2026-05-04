import { test, expect } from '@playwright/test'

test('home page loads and navigates to services', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('heading', { name: /Production-Ready/i })).toBeVisible()
  await page.getByRole('link', { name: 'View Services' }).click()
  await expect(page).toHaveURL(/\/services$/)
  await expect(page.getByRole('heading', { name: 'Professional Services' })).toBeVisible()
})

test('pc checker detail page exposes details, repo link, and disabled hosted action', async ({ page }) => {
  await page.goto('/projects/pc-checker')

  await expect(page.getByRole('heading', { name: 'PC Checker' })).toBeVisible()
  await expect(page.getByRole('link', { name: /View GitHub Repo/i })).toHaveAttribute('href', 'https://github.com/dallas8000-ops/PC-Checker')
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