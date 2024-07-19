import { expect, test } from '@playwright/test'

test('Update profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Pizza Shop' }).click()

  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

  await page.getByLabel('Nome').fill('Rocket Pizza')
  await page.getByLabel('Descricao').fill('any think')

  await page.getByRole('button', { name: 'Salvar' }).click()

  const toast = page.getByText('Perfil atualizado com sucesso!')

  await page.waitForLoadState('networkidle') // aguardar toda e qual requisicao sendo feita finalizar

  expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()

  // await page.waitForTimeout(2000)

  expect(page.getByRole('button', { name: 'Rocket Pizza' })).toBeVisible()
})

test('Update profile with wrong credentials', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Pizza Shop' }).click()

  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

  await page.getByLabel('Nome').fill('No way')
  await page.getByLabel('Descricao').fill('any think')

  await page.getByRole('button', { name: 'Salvar' }).click()

  const toast = page.getByText('Falha ao atualizar o perfil')

  await page.waitForLoadState('networkidle')

  expect(toast).toBeVisible()
})
