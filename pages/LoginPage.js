
exports.LoginPage = class LoginPage {

    loginPageTitle ="Customer Login Magento Commerce - website to practice selenium | demo website for automation testing | selenium practice sites" 
    invalidCredErrorMsg = "Invalid Form Key. Please refresh the page."
    invalidEmailText = "Please enter a valid email address"
    homePageTitle = "Home Page - Magento eCommerce - website to practice selenium | demo website for automation testing | selenium practice sites | selenium demo sites | best website to practice selenium automation | automation practice sites Magento Commerce - website to practice selenium | demo website for automation testing | selenium practice sites"

    constructor(page) {
        this.page = page;
        this.signInLink = page.getByRole('link', { name: 'Sign In' });
        this.cutomerLoginText = page.getByText('Customer Login');
        this.email = page.getByRole('textbox', { name: 'Email*' });
        this.invalidEmail = page.locator("//div[@id='email-error']")
        this.password = page.getByLabel('Password');
        this.signInButton = page.getByRole('button', { name: 'Sign In' });
        this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot Your Password?' });
        this.loginErrMsg = page.locator("div[data-bind='html: $parent.prepareMessageForHtml(message.text)']")
        this.panelView = page.getByRole('listitem').filter({ hasText: 'Change My Account My Wish List Sign Out' }).locator('button');
        this.myAccount = page.getByRole('link', { name: 'My Account' })
    }

    async goTo() {
        await this.page.goto("https://magento.softwaretestingboard.com/");
    }

    async loginToApplication(email, password) {
        await this.signInLink.click()
        await this.email.type(email);
        await this.password.type(password);
        await this.page.pause()
        // await this.signInButton.waitFor();
        await this.signInButton.click();
        // await this.page.waitForLoadState('networkidle');     
    }

    async goTomyAccount() {
        await this.panelView.click();
        await this.myAccount.click()
    }
}
