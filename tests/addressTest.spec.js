import { test, expect } from '@playwright/test';
const { POManager } = require('../pages/POManager');
const addressDetails = JSON.parse(JSON.stringify(require('../utils/AddressTestData.json')))
test('test', async ({ page }) => {
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    const addressPage = poManager.getAddressPage();

    await loginPage.goTo();
    await loginPage.loginToApplication("abc0505@gmail.com", "Test@123");
    await expect(page).toHaveTitle(loginPage.homePageTitle)

    await loginPage.goTomyAccount()
    await addressPage.fillAddress(addressDetails.firstName, addressDetails.lastName, addressDetails.company,
        addressDetails.phoneNumber, addressDetails.streetAdress, addressDetails.country, addressDetails.state,
        addressDetails.city, addressDetails.zipCode
    )
    await expect(addressPage.savedAddressText).toContainText("You saved the address.");

});