import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/');
  await page.getByRole('link', { name: 'Edit Address' }).first().click();
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('Test11');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('Test22');
  await page.getByLabel('Company').click();
  await page.getByLabel('Company').fill('abc');
  await page.getByLabel('Phone Number').click({
    clickCount: 3
  });
  await page.getByLabel('Phone Number').fill('123');
  await page.getByRole('textbox', { name: 'Street Address\n* Street Address: Line 1' }).click({
    clickCount: 3
  });
  await page.getByRole('textbox', { name: 'Street Address\n* Street Address: Line 1' }).fill('q');
  await page.getByLabel('City').click();
  await page.getByLabel('City').press('Meta+a');
  await page.getByLabel('City').fill('ban');
  await page.getByRole('combobox', { name: 'State/Province\n*' }).selectOption('552');
  await page.getByLabel('Zip/Postal Code').dblclick();
  await page.getByLabel('Zip/Postal Code').fill('12345.0fwrw');
  await page.getByRole('combobox', { name: 'Country\n*' }).selectOption('IS');
  await page.getByRole('button', { name: 'Save Address' }).click();
  await page.getByText('You saved the address.').click();
  await page.getByText('You saved the address.').dblclick();
});