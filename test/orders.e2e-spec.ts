import { expect, test } from '@playwright/test'

test('Orders lists', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })
  await page.waitForTimeout(2000)

  expect(
    page.getByRole('cell', { name: 'customer 1', exact: true }),
  ).toBeVisible()
  expect(page.getByRole('cell', { name: 'customer 10' })).toBeVisible()
})

test('Paginate orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })
  await page.waitForTimeout(2000)

  await page.getByRole('button', { name: 'Proxima pagina' }).click()

  expect(
    page.getByRole('cell', { name: 'customer 11', exact: true }),
  ).toBeVisible()
  expect(page.getByRole('cell', { name: 'customer 20' })).toBeVisible()

  await page.getByRole('button', { name: 'Ultima Pagina' }).click()

  expect(
    page.getByRole('cell', { name: 'customer 51', exact: true }),
  ).toBeVisible()
  expect(page.getByRole('cell', { name: 'customer 60' })).toBeVisible()

  await page.getByRole('button', { name: 'Pagina Anterior' }).click()

  expect(
    page.getByRole('cell', { name: 'customer 41', exact: true }),
  ).toBeVisible()
  expect(page.getByRole('cell', { name: 'customer 50' })).toBeVisible()

  await page.getByRole('button', { name: 'Primeira Pagina' }).click()

  expect(
    page.getByRole('cell', { name: 'customer 1', exact: true }),
  ).toBeVisible()
  expect(page.getByRole('cell', { name: 'customer 10' })).toBeVisible()
})

test('Filtr by orderId', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })
  await page.waitForTimeout(2000)

  await page.getByPlaceholder('ID do pedido').fill('order-15')
  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  expect(
    page.getByRole('cell', { name: 'customer 15', exact: true }),
  ).toBeVisible()
})
