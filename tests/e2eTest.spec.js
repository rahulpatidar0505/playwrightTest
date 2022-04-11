const {test, expect} = require('@playwright/test')

test('Register', async ({page}) => {

    const firstName = page.locator("#firstName")
    const lastName = page.locator("#lastName") 
    const email = page.locator("#userEmail")
    const phoneNumber = page.locator("#userMobile")
    const occupation = page.locator(".custom-select.ng-pristine.ng-valid.ng-touched")
    const gender = page.locator("input[value='Male']")
    const password = page.locator("#userPassword")
    const confirmPassword = page.locator("#confirmPassword")
    const confirmCheckbox = page.locator("input[type='checkbox']")
    const registerButton = page.locator("#login")
 
    await page.goto("https://rahulshettyacademy.com/client/")
    await expect(page).toHaveTitle("Let's Shop")
    await page.waitForLoadState('networkidle')
    await page.locator(".login-wrapper-footer-text").click()
    
    await firstName.type("Rahul")
    await lastName.type("Patidar")
    await email.type("rahualgpatidar@gmail.com")
    await phoneNumber.type("123456789")
    // await occupation.selectOption("3: Engineer")
    // await occupation.selectText("Engineer")
    await gender.click()
    await password.type("Test@123")
    await confirmPassword.type("Test@123")
    await confirmCheckbox.click()
    await registerButton.click()

});

test('Login', async({page}) => {
    const email = page.locator("#userEmail")
    const password = page.locator("#userPassword")
    const loginButton = page.locator("#login")
    await page.goto("https://rahulshettyacademy.com/client/")
    await email.type("rahualgpatidar@gmail.com")
    await password.type("Test@123")
    await loginButton.click()
    await page.waitForLoadState('networkidle')

    const productList =  page.locator(".card-body")
    const productCount = await productList.count()

    for (let i = 0; i < productCount; i++) {
        const productText = await productList.nth(i).locator("b").textContent()
        if (productText === "Zara Coat 4"){
            await productList.nth(i).locator("button").last().click()
            break
        }
    }
    // await page.pause()
    await page.locator("[routerlink*='cart']").click({force:true})
    await page.waitForLoadState('networkidle')

    // const productName = await page.locator("div[class='cartSection'] h3").textContent()
    // await expect(productName).toMatch(productText)

    page.locator("li[class='totalRow'] button[type='button']").click()

    page.locator("text = Credit Card Number ")
});