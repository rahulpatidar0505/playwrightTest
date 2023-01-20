import { test, expect } from '@playwright/test';
const {POManager} = require('../pages/POManager');


test('Login Test', async({page}) => {
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();

    await loginPage.goTo();
    await loginPage.loginToApplication("abc0505@gmail.com", "Test@123");
});