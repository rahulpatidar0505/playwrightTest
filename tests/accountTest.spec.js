import { test, expect } from '@playwright/test';
const { POManager } = require('../pages/POManager');

test('test', async ({ page }) => {
  const poManager = new POManager(page);
  const loginPage = poManager.getLoginPage();
  const accountPage = poManager.getAccountPage();
  const checkoutPage = poManager.getCheckoutPage();

  await loginPage.goTo();
  await loginPage.loginToApplication("abc0505@gmail.com", "Test@123");
  await accountPage.selectJacket();
  await accountPage.selectSpecificProduct("Montana Wind Jacket", "M", "Green")

  await accountPage.selectJacket();
  await accountPage.selectSpecificProduct("Lando Gym Jacket", "L", "Blue")

  await accountPage.selectPant();
  await accountPage.selectSpecificProduct("Zeppelin Yoga Pant", "32", "Red")

  await accountPage.goToCartAndCheckout();

  await checkoutPage.placeOrder()

  await loginPage.goTomyAccount()

  await checkoutPage.goToMyOrders()

});