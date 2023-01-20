class LoginPage {

constructor(page)
{
    this.page = page;
    this.signInLink= page.getByRole('link', { name: 'Sign In' });
    this.cutomerLoginText = page.getByText('Customer Login');
    this.email = page.getByRole('textbox', { name: 'Email*' });
    this.password = page.getByLabel('Password');
    this.signInButton = page.getByRole('button', { name: 'Sign In' });
    this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot Your Password?' });
    this.panelView = page.getByRole('listitem').filter({ hasText: 'Change My Account My Wish List Sign Out' }).locator('button');
    this.myAccount = page.getByRole('link', { name: 'My Account' })
}

async goTo()
{
    await this.page.goto("https://magento.softwaretestingboard.com/");
}
async loginToApplication(email,password)
{
    await this.signInLink.click()
    await this.email.type(email);
    await this.password.type(password);
    await this.signInButton.click();
}

}
module.exports = {LoginPage};