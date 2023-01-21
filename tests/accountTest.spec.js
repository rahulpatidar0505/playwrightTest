import { test, expect } from '@playwright/test';
const { POManager } = require('../pages/POManager');

test('test', async ({ page }) => {
  const poManager = new POManager(page);
  const loginPage = poManager.getLoginPage();
  const accountPage = poManager.getAccountPage();

  await loginPage.goTo();
  await loginPage.loginToApplication("abc0505@gmail.com", "Test@123");
  await accountPage.selectJacket();
  await accountPage.selectSpecificProduct("Montana Wind Jacket", "M", "Green")
  // await accountPage.addToCartButton.first().click()


  // await page.getByRole('menuitem', { name: ' Men' }).click();
  // await page.getByRole('menuitem', { name: ' Tops' }).click();
  // await page.getByRole('menuitem', { name: 'Jackets' }).click();
  // await page.getByRole('link', { name: 'Montana Wind Jacket' }).first().click();
  // await page.getByRole('option', { name: 'M' }).click();
  // await page.getByRole('listbox', { name: 'Color' }).click();
  // await page.getByRole('heading', { name: 'Montana Wind Jacket' }).getByText('Montana Wind Jacket').click();
  // await page.getByText('$49.00').click();
  // await page.getByRole('option', { name: 'Red' }).click();
  // await page.getByRole('button', { name: 'Add to Cart' }).click();

  // await page.getByRole('link', { name: 'Lando Gym Jacket' }).first().click();
  // await page.getByRole('heading', { name: 'Lando Gym Jacket' }).getByText('Lando Gym Jacket').click();
  // await page.getByText('$99.00').click();
  // await page.locator('#option-label-size-143-item-169').click();
  // await page.getByRole('option', { name: 'Blue' }).click();
  // await page.getByRole('button', { name: 'Add to Cart' }).click();

  // await page.getByRole('menuitem', { name: ' Bottoms' }).click();
  // await page.getByRole('menuitem', { name: 'Pants' }).click();
  // await page.getByRole('link', { name: 'Zeppelin Yoga Pant' }).first().click();
  // await page.getByRole('heading', { name: 'Zeppelin Yoga Pant' }).getByText('Zeppelin Yoga Pant').click();
  // await page.getByText('$82.00').click();
  // await page.getByRole('option', { name: '32' }).click();
  // await page.getByRole('option', { name: 'Red' }).click();
  // await page.getByRole('button', { name: 'Add to Cart' }).click();

  // await page.getByRole('link', { name: ' My Cart 3 3\nitems' }).click();
  // await page.getByRole('button', { name: 'Proceed to Checkout' }).click();
});