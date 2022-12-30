const {test, expect} = require('@playwright/test')

test('Alert test', async({page}) => {
    await page.goto("https://demoqa.com/alerts")

    page.on('dialog', dialog => dialog.accept());
    await page.locator("#alertButton").click()

    await page.locator("#confirmButton").click()
    await expect(page.locator("#confirmResult")).toBeVisible()


});