const { test, expect } = require("@playwright/test")

test('Textbox ', async({page}) => {
    await page.goto("https://demoqa.com/text-box")
    await page.locator("#userName").type("Rahul Patidar")
    await page.locator("#userEmail").fill("rahul@gmail.com")
    await page.locator("#currentAddress").fill("Prasun Savoy")
    await page.locator("#permanentAddress").fill("Prasun Savoy")
    await page.locator("#submit").click()
});

test('Checkbox', async({page}) => {
    await page.goto("https://demoqa.com/checkbox")
    await expect(page.locator("xpath=//span[@class='rct-checkbox']//*[name()='svg']")).not.toBeChecked()
    await page.locator("xpath=//span[@class='rct-checkbox']//*[name()='svg']").click()
    await expect(page.locator("xpath=//span[@class='rct-checkbox']//*[name()='svg']")).toBeChecked()
    await page.locator("xpath=//*[name()='path' and contains(@d,'M10 6L8.59')]").click()

    await page.locator("//label[@for='tree-node-documents']//span[@class='rct-checkbox']//*[name()='svg']").click()
    await page.locator("//li[2]//span[1]//button[1]//*[name()='svg']").click()

    await page.locator("//label[@for='tree-node-office']//span[@class='rct-checkbox']//*[name()='svg']").click()
    await page.locator("//body//div[@id='app']//li[@class='rct-node rct-node-parent rct-node-expanded']//li[@class='rct-node rct-node-parent rct-node-expanded']//li[2]//span[1]//button[1]//*[name()='svg']//*[name()='path' and contains(@d,'M10 6L8.59')]").click()
});

test('Radio button', async({page}) => {
   await page.goto("https://demoqa.com/radio-button") 
   await expect(page.locator("label[for='impressiveRadio']")).toBeVisible()
   await expect(page.locator("label[for='impressiveRadio']")).not.toBeChecked()
   await page.locator("label[for='impressiveRadio']").click()
   await expect(page.locator("label[for='impressiveRadio']")).toBeChecked()
   const selectedText = await page.locator("text=You have selected ").textContent()
   console.log(selectedText)
});

test('Webtable', async({page}) => {
    await page.goto("https://demoqa.com/webtables")
    const rowLocator = page.locator("xpath=//div[@class='rt-tbody']/div")
    const rowCount = await rowLocator.count()

    for (let index = 0; index < rowCount; index++) {
        const cellText= await rowLocator.locator("xpath=//div//div[6]").nth(index).textContent()
        if(cellText === "Legal"){
            await rowLocator.nth(index).locator("xpath=//div//div//span[2]").click()
            break
        }
    }
});

test('Button test', async({page}) => {
    await page.goto("https://demoqa.com/buttons")
    await page.locator("#doubleClickBtn").dblclick()
    await expect(page.locator("#doubleClickMessage")).toBeVisible()

    await page.locator("xpath =(//button[normalize-space()='Click Me'])[1]").click()
    await expect(page.locator("#dynamicClickMessage")).toBeVisible()
});