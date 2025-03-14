import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.sgproof.com/');
  await page.getByLabel('Select State').selectOption('100');
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.waitForTimeout(7000);
  await page.getByText('Log In').first().click();
  await page.locator('#username').fill('asadminaplnv@yopmail.com');
  await page.locator('#username').press('Tab');
  await page.locator('#password').fill('Sgwsaplnv@2024');
  await page.waitForTimeout(8000);
  await page.locator('//*[@value="Log In"]').click();
  await page.waitForTimeout(25000);
  await page.getByRole('link', { name: 'Open Products navigation menu' }).click();
  await page.waitForTimeout(2000);
  await page.locator('#container-6377d06609').getByRole('link', { name: 'Shop All Products' }).click();
  await page.goto('https://demo.sgproof.com/search');
 // await page.getByRole('link',{name:'Meiomi Pinot Noir California'}).click();
  //await page.locator('div:nth-child(3) > .MuiBox-root > .MuiSvgIcon-root').first().click();
 // await page.locator('.MuiBox-root > div:nth-child(2) > button').first().click();
  await page.locator('data-testid=AddIcon').first().click();
  await page.getByRole('button',{name:'Add to Cart'}).first().click();

});