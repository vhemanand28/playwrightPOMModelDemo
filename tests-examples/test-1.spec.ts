import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.sgproof.com/');
  await page.getByLabel('Select State').selectOption('75');
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByText('Log In').first().click();

  await page.locator('#username').click();
  await page.locator('#username').press('ControlOrMeta+a');
  await page.locator('#username').fill('asadminaplnv@yopmail.com');
  await page.locator('#password').click();
  await page.locator('#password').click();
  await page.locator('#password').fill('Sgwsaplnv@2024');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.locator('#container-6377d06609').getByRole('link', { name: 'Shop All Products' }).click();
  await page.goto('https://demo.sgproof.com/search');
  await page.locator('div:nth-child(3) > .MuiBox-root > .MuiSvgIcon-root').first().click();
  await page.locator('div:nth-child(2) > .MuiButtonBase-root').first().click();
  await page.getByLabel('Your Carts').getByRole('link').filter({ hasText: /^$/ }).click();
  await page.getByLabel('Your Carts').getByRole('link').filter({ hasText: /^$/ }).click();
});