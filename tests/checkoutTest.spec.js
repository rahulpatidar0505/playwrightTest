// import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.getByText('Order Summary').click();
  await page.getByText('Order Summary 3 Items in Cart Montana Wind Jacket Qty 1 $49.00 View Details Opti').click();
  await page.getByRole('button', { name: 'Ship Here' }).click();
  await page.getByRole('radio', { name: 'Fixed Flat Rate' }).check();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByText('Thank you for your purchase!').click();
  await page.getByRole('link', { name: '000015730' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Change My Account My Wish List Sign Out' }).locator('button').click();
  await page.getByRole('banner').getByRole('link', { name: 'My Account' }).click();
  await page.getByRole('link', { name: 'My Orders' }).click();
  await page.getByRole('cell', { name: '000015730' }).click();
  
});