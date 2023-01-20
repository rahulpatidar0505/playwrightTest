import { test, expect } from '@playwright/test';
const { POManager } = require('../pages/POManager');


test('Valid Login Test', async ({ page }) => {
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();

    await loginPage.goTo();
    await loginPage.loginToApplication("abc0505@gmail.com", "Test@123");
    await expect(page).toHaveTitle(loginPage.loginPageTitle)
});

test('Invalid Login Test', async ({ page }) => {
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();

    await loginPage.goTo();
    await loginPage.loginToApplication("test@gmail.com", "Test@123");
    await expect(loginPage.loginErrMsg.first()).toHaveText(loginPage.invalidCredErrorMsg);
});

test('Invalid email Test', async ({ page }) => {
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();

    await loginPage.goTo();
    await loginPage.loginToApplication("test@gg.com", "Test@123");
    await expect(loginPage.invalidEmail).toHaveText(loginPage.invalidCredErrorMsg);
});