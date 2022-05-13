const {test, expect} = require('@playwright/test')

test('Form fill', async({page}) => {
    await page.goto("https://demoqa.com/automation-practice-form")
    await page.locator("#firstName").fill("rahul")
    await page.locator("#lastName").fill("patidar")
    await page.locator("#userEmail").fill("test@gmail.com")
    await page.locator("label[for='gender-radio-1']").click()

    await page.locator("#userNumber").fill("990098988")
    
    await page.locator("#dateOfBirthInput").click()
    await page.locator(".react-datepicker__month-select").selectOption("8")
    await page.locator(".react-datepicker__year-select").selectOption("1991")
    await page.locator("div[aria-label='Choose Saturday, September 21st, 1991']").click()

    await page.locator("label[for='hobbies-checkbox-2']").click()
    await page.locator("#currentAddress").fill("prasun savoy")
    await page.locator("#uploadPicture").setInputFiles('abc.txt')

});