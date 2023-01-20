import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.getByRole('menuitem', { name: ' Men' }).click();
  await page.getByRole('menuitem', { name: ' Tops' }).click();
  await page.getByRole('menuitem', { name: 'Jackets' }).click();
  await page.getByRole('link', { name: 'Montana Wind Jacket' }).first().click();
  await page.getByRole('option', { name: 'M' }).click();
  await page.getByRole('listbox', { name: 'Color' }).click();
  await page.getByRole('heading', { name: 'Montana Wind Jacket' }).getByText('Montana Wind Jacket').click();
  await page.getByText('$49.00').click();
  await page.getByRole('option', { name: 'Red' }).click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();


  await page.getByRole('link', { name: 'Lando Gym Jacket' }).first().click();
  await page.getByRole('heading', { name: 'Lando Gym Jacket' }).getByText('Lando Gym Jacket').click();
  await page.getByText('$99.00').click();
  await page.locator('#option-label-size-143-item-169').click();
  await page.getByRole('option', { name: 'Blue' }).click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();

  await page.getByRole('menuitem', { name: ' Bottoms' }).click();
  await page.getByRole('menuitem', { name: 'Pants' }).click();
  await page.getByRole('link', { name: 'Zeppelin Yoga Pant' }).first().click();
  await page.getByRole('heading', { name: 'Zeppelin Yoga Pant' }).getByText('Zeppelin Yoga Pant').click();
  await page.getByText('$82.00').click();
  await page.getByRole('option', { name: '32' }).click();
  await page.getByRole('option', { name: 'Red' }).click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();

  await page.getByRole('link', { name: ' My Cart 3 3\nitems' }).click();
  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();


  
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