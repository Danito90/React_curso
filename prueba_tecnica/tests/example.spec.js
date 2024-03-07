// @ts-check
import { test, expect } from '@playwright/test'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const LOCALHOST_URL = 'http://localhost:5173/'

test('Prueba de app random image y fact', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  console.log({ textContent, imageSrc })
  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_ENDPOINT_RANDOM_FACT)).toBeTruthy()
})

// Test para evaluar el resultado del parrafo y la imagen
