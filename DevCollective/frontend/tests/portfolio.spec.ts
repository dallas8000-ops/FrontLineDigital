import { test, expect } from '@playwright/test'
import { portfolioLiveUrls } from '../src/data/portfolioLiveUrls'

test('home previews three flagship projects and links to the complete catalog', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('heading', { name: /Secure internal tools and ops dashboards/i })).toBeVisible()
  await expect(page.locator('#portfolio article')).toHaveCount(3)
  await expect(page.getByRole('link', { name: /View all projects/i })).toHaveAttribute('href', '/dashboard')
})

test('services presents service offerings without duplicating the project catalog', async ({ page }) => {
  await page.goto('/services')

  await expect(page.getByRole('heading', { name: /Services built around production experience/i })).toBeVisible()
  await expect(page.getByRole('article')).toHaveCount(0)
  await expect(page.getByRole('link', { name: /View all projects/i })).toHaveAttribute('href', '/dashboard')
})

const portfolioDemoLinks = [
  ['AI Software Operations Studio', portfolioLiveUrls.operationsStudio],
  ['DBOps Control Center', portfolioLiveUrls.dbopsWeb],
  ['Deployment & Stripe Automation Center', portfolioLiveUrls.automationCenter],
  ['Elite Fintech Systems', portfolioLiveUrls.eliteFintech],
  ['Kistie Store', portfolioLiveUrls.kistieStore],
  ['RigHand AI', portfolioLiveUrls.righandFrontend],
  ['PC Checker Extreme', portfolioLiveUrls.pcCheckerExtreme],
  ['Specwright', portfolioLiveUrls.specwrightWeb],
] as const

for (const [title, href] of portfolioDemoLinks) {
  test(`${title} live demo points at Railway production URL`, async ({ page }) => {
    await page.goto('/dashboard')

    const demo = page
      .getByRole('article')
      .filter({ has: page.getByRole('heading', { name: title }) })
      .getByRole('link', { name: /Live demo/i })

    await expect(demo).toHaveAttribute('href', href)
  })
}

test('retired storefronts are not listed in the public catalog', async ({ page }) => {
  await page.goto('/dashboard')

  await expect(page.getByRole('heading', { name: 'SilverFox' })).toHaveCount(0)
  await expect(page.getByRole('heading', { name: 'React Store Catalog' })).toHaveCount(0)
})

test('pc checker extreme detail page exposes live demo and contact actions', async ({ page }) => {
  await page.goto('/projects/pc-checker')

  await expect(page.getByRole('heading', { name: 'PC Checker Extreme' })).toBeVisible()
  await expect(page.getByRole('link', { name: /Live demo/i })).toHaveAttribute(
    'href',
    portfolioLiveUrls.pcCheckerExtreme
  )
  await expect(page.getByRole('link', { name: /Request a demo/i })).toHaveAttribute('href', '/contact')
  await expect(page.getByText(/cloud-hosted diagnostic command center/i)).toBeVisible()
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
