import { expect, test } from '@playwright/test'

test('Sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.locator('input[name="restaurantName"]').fill('Pizza Shop')
  await page.locator('input[name="managerName"]').fill('John Doe')
  await page.locator('input[name="phone"]').fill('000000')
  await page.locator('input[name="email"]').fill('johndoe@example.com')

  await page.getByRole('button', { name: 'Finalizar cadstro' }).click()

  const tost = page.getByText('Restaurante cadastrado com sucesso.')

  expect(tost).toBeVisible()
})

test('Sign up with wrong credentials', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.locator('input[name="restaurantName"]').fill('erro reooeo')
  await page.locator('input[name="managerName"]').fill('John Doe')
  await page.locator('input[name="phone"]').fill('000000')
  await page.locator('input[name="email"]').fill('johndoe@example.com')

  await page.getByRole('button', { name: 'Finalizar cadstro' }).click()

  const tost = page.getByText('Erro ao cadastrar restaurante')

  expect(tost).toBeVisible()
})

test('Navigate to sign-in page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('/sign-in')
})
