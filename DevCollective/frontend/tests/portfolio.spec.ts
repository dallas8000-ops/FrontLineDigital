import { test, expect } from '@playwright/test'
import { portfolioLiveUrls } from '../src/data/portfolioLiveUrls'

test('home page loads portfolio-first hero and links to services', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('heading', { name: /Production SaaS, fintech, AI automation/i })).toBeVisible()
  await expect(page.getByRole('heading', { name: /Flagship products recruiters can verify fast/i })).toBeVisible()
  await page.getByRole('navigation').getByRole('link', { name: 'Services' }).click()
  await expect(page).toHaveURL(/\/services$/)
  await expect(page.getByRole('heading', { name: /Defined by what is already in production/i })).toBeVisible()
})

const portfolioDemoLinks = [
  ['DBOps Control Center', portfolioLiveUrls.dbopsWeb],
  ['Deployment & Stripe Automation Center', portfolioLiveUrls.automationCenter],
  ['Elite Fintech Systems', portfolioLiveUrls.eliteFintech],
  ['Kistie Store', portfolioLiveUrls.kistieStore],
  ['RigHand AI', portfolioLiveUrls.righandFrontend],
  ['Django REST Blog API', portfolioLiveUrls.blogApi],
  ['React Store Catalog', portfolioLiveUrls.reactStoreCatalog],
  ['PC Checker Extreme', portfolioLiveUrls.pcCheckerExtreme],
  ['Specwright', portfolioLiveUrls.specwrightWeb],
] as const

for (const [title, href] of portfolioDemoLinks) {
  test(`${title} live demo points at Railway production URL`, async ({ page }) => {
    await page.goto('/')

    const demo = page
      .getByRole('article')
      .filter({ has: page.getByRole('heading', { name: title }) })
      .getByRole('link', { name: /Live demo/i })

    await expect(demo).toHaveAttribute('href', href)
  })
}

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
