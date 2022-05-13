const {test, expect} = require('@playwright/test')

test('Tab handle', async({browser}) => {
    const browserContext = await browser.newContext()
    const page = await browserContext.newPage()
    await page.goto("https://demoqa.com/browser-windows")

    const [newPage] = await Promise.all([
        browserContext.waitForEvent('page'),
        page.locator("#tabButton").click()
    ])

    const sampleText = await newPage.locator("#sampleHeading").textContent()
    await expect(newPage.locator("#sampleHeading")).toBeVisible()
    console.log(sampleText)
});

test('Window handle', async({browser}) => {
    const browserContext = await browser.newContext()
    const page = await browserContext.newPage()
    await page.goto("https://demoqa.com/browser-windows")

    const [newWindow] = await Promise.all([
        browserContext.waitForEvent("page"),
        page.locator("#windowButton").click()
    ])
    const sampleText = await newWindow.locator("#sampleHeading").textContent()
    await expect(newWindow.locator("#sampleHeading")).toBeVisible()
    console.log(sampleText)
});

test('Window messgae', async({browser}) => {
    const browserCotext = await browser.newContext()
    const page = await browserCotext.newPage()
    await page.goto("https://demoqa.com/browser-windows")

    const [newWindow] = await Promise.all([
         browserCotext.waitForEvent("page"),
        page.locator("#messageWindowButton").click()
    ])
    const sampleText = await newWindow.locator("body").textContent()
    await expect(newWindow.locator("body")).toBeVisible()
    console.log(sampleText)
});