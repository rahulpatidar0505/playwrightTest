const { test, expect } = require("@playwright/test")

    test.describe('All basic validation', () =>{
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

    test('File upload test', async ({page}) =>{
        await page.goto('https://ps.uci.edu/~franklin/doc/file_upload.html')
        await page.locator("input[name='userfile']").setInputFiles('test.txt')
    })

    test('Alert test', async({page}) => {
        await page.goto("https://demoqa.com/alerts")

        page.on('dialog', dialog => dialog.accept());
        await page.locator("#alertButton").click()

        await page.locator("#confirmButton").click()
        await expect(page.locator("#confirmResult")).toBeVisible()

    });

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

    test('Tab handle', async({browser}) => {
        const browserContext = await browser.newContext()
        const page = await browserContext.newPage()
        await page.goto("https://demoqa.com/browser-windows")

        const [newPage] = await Promise.all([ // here newPage object has access to new page
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

        const [newWindow] = await Promise.all([ // here newWindow object has access to new page
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

        const [newWindow] = await Promise.all([ // here newWindow object has access to new page
            browserCotext.waitForEvent("page"),
            page.locator("#messageWindowButton").click()
        ])
        const sampleText = await newWindow.locator("body").textContent()
        await expect(newWindow.locator("body")).toBeVisible()
        console.log(sampleText)
    });

    test('Form fill', async({page}) => {
        // JS is asynchronous in nature, so we have to use async and await togeter, 
        //else we can phase sync issue and if we will not wright await all lines will execute 1 by 1 without waiting

        await page.goto("https://demoqa.com/automation-practice-form")
        // Differece b/w type() and fill() : fill() can used to clear textbox as well if we pass fill("")
        await page.locator("#firstName").fill("rahul")
        await page.locator("#lastName").fill("patidar")
        await page.locator("#userEmail").fill("test@gmail.com")
        await page.locator("label[for='gender-radio-1']").click()
        await page.locator("#userNumber").fill("990098988")
        await page.locator("#dateOfBirthInput").click()
        //selectOption() : we have to pass "value" inside this function
        await page.locator(".react-datepicker__month-select").selectOption("8")
        await page.locator(".react-datepicker__year-select").selectOption("1991")
        await page.locator("div[aria-label='Choose Saturday, September 21st, 1991']").click()
        await page.locator("label[for='hobbies-checkbox-2']").click()
        await page.locator("#currentAddress").fill("prasun savoy")
        await page.locator("#uploadPicture").setInputFiles('test.txt')

    });
});