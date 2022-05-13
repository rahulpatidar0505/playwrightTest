const { test, expect } = require('@playwright/test');

test.describe('Test scenario', () =>{
    test('Multiple element validation test', async ({browser}) => {
        // Launch application
        const browserContext = await browser.newContext()
        const page = await browserContext.newPage()
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
        await page.pause()
        // handle radio button
        const radioButton_locator = page.locator("input[value='radio2']")
        await expect(page).toHaveURL('https://rahulshettyacademy.com/AutomationPractice/')
        await expect(page).toHaveTitle('Practice Page')
        await expect(radioButton_locator).toBeEnabled()
        await expect(radioButton_locator).not.toBeDisabled()
        await expect(radioButton_locator).toHaveClass('radioButton')
        await expect(radioButton_locator).toHaveCount(1)
        await expect(radioButton_locator).toHaveValue('radio2')
        await expect(radioButton_locator).toHaveAttribute('type', 'radio')
        await expect(radioButton_locator).toBeVisible()
        await radioButton_locator.click()
        await expect(radioButton_locator).toBeChecked()

        // handle static dropdown
        await page.locator("#dropdown-class-example").selectOption("option3")

        // handle alert
        page.on('dialog', dialog => dialog.accept());
        await page.click('#alertbtn');
        await page.click('#confirmbtn');

        // handle hide and show text boxx
        await page.locator("#show-textbox").click()
        await expect(page.locator("#displayed-text")).toHaveAttribute('style', 'display: block;')
        await page.locator("#hide-textbox").click()
        await expect(page.locator("#displayed-text")).not.toBeVisible()
        await expect(page.locator("#displayed-text")).toHaveAttribute('style', 'display: none;')

        // hadle auto-suggestion
        await page.locator("#autocomplete").type("india", {delay:100})
        const suggestion = page.locator(".ui-autocomplete")
        const autoSuggetion = await suggestion.count()
        for (let i = 0; i < autoSuggetion; i++) {
            const country = await suggestion.nth(i).locator('li').last().textContent()
            if(country === "India"){
                await suggestion.nth(i).locator('li').last().click()
                break
            }
        }

        // handle mouse over
        await page.locator("#mousehover").hover()
        mouseoverLocator = page.locator(".mouse-hover-content")
        await mouseoverLocator.locator(':has-text("Top")').click();

        // handle webtable
        rowLocator = page.locator("xpath=//div[@class='left-align']//table[@id='product']//tr")
        const rowCount =  await rowLocator.count()
        for (let i = 1; i <=rowCount; i++) {
            const course = await rowLocator.nth(i).locator("xpath=td[2]").textContent()
            if(course === "Master Selenium Automation in simple Python Language"){
                console.log(await rowLocator.nth(i).locator("xpath=td[3]").textContent())
                break
            }
        }

        // tab handle
        const tab = page.locator("#opentab")
        const [newPage] = await Promise.all([
            browserContext.waitForEvent('page'),
            tab.click()
        ])
        await newPage.locator("div[class='logo'] a").isVisible()

        // window handle

        // frame handle

        // links handle

        // checkbox handle

        // read json data
    });

    test('File upload test', async ({page}) =>{
        await page.goto('https://ps.uci.edu/~franklin/doc/file_upload.html')
        await page.locator("input[name='userfile']").setInputFiles('abc.txt')
    })
})
