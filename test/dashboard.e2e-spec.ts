import { expect, test } from '@playwright/test'

test('display day order amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  await page.waitForTimeout(2000)
  expect(page.getByText('20', { exact: true })).toBeVisible()
  expect(page.getByText('-5% em relacao ao dia passado')).toBeVisible()
})

test('display month order amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  await page.waitForTimeout(2000)
  expect(page.getByText('200')).toBeVisible()
  expect(page.getByText('+7% em relacao ao mes passado')).toBeVisible()
})
test('display month canceled order amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  await page.waitForTimeout(2000)
  expect(page.getByText('5', { exact: true })).toBeVisible()
  expect(page.getByText('-5% em relacao ao mes passado')).toBeVisible()
})
test('display month revenue order metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  await page.waitForTimeout(2000)
  expect(page.getByText('R$ 300,00')).toBeVisible()
  expect(page.getByText('+10% em relacao ao mes passado')).toBeVisible()
})
