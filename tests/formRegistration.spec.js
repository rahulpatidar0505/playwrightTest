const {test, expect} = require('@playwright/test')

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
    await page.locator("#uploadPicture").setInputFiles('abc.txt')

});