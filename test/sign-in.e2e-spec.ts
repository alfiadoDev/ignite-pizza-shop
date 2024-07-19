import { expect, test } from '@playwright/test'

test('Sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('textbox').fill('johndoe@example.com')

  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const tost = page.getByText(
    'Enviamos um link de autenticacao para seu email.',
  )

  expect(tost).toBeVisible()

  // await page.waitForTimeout(2000) // para nao aparecer telas e branco no playwright e um problema deles nb: para fins de debug so nao deixar no codigo fdinal
})

test('Sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('textbox').fill('helo@example.com')

  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const tost = page.getByText('Credenciais invalidas')

  expect(tost).toBeVisible()
})

test('Navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Novo estabelecimento' }).click()

  expect(page.url()).toContain('/sign-up')
})
