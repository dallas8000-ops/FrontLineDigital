import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { chromium } from '@playwright/test'
import { preview } from 'vite'

const host = '127.0.0.1'
const port = 4173
const resumeUrl = `http://${host}:${port}/resume-print`
const outputPath = path.resolve('public/images/portfolio/Barney_Gilliom_Resume_v3.pdf')

const previewServer = await preview({
  preview: { host, port, strictPort: true },
})

let browser
try {
  browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({ viewport: { width: 816, height: 1056 } })
  await page.goto(resumeUrl, { waitUntil: 'networkidle' })
  await mkdir(path.dirname(outputPath), { recursive: true })
  await page.pdf({
    path: outputPath,
    format: 'Letter',
    printBackground: true,
    preferCSSPageSize: true,
  })
  console.log(`Resume PDF written to ${outputPath}`)
} finally {
  await browser?.close()
  await previewServer.close()
}