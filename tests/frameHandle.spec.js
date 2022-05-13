const {test, expect} = require('@playwright/test')

test('Frame handle', async({page}) => {
    await page.goto("https://demoqa.com/frames")

    const frameLocator = page.frameLocator("xpath = //iframe[@id='frame1']")
    // Text inside of frame
    await expect(frameLocator.locator("#sampleHeading")).toBeVisible()
    const sampleText = await frameLocator.locator("#sampleHeading").textContent()
    console.log(sampleText)

    // Text outside of frame
    await expect(page.locator(".main-header")).toBeVisible()
});