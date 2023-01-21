const { LoginPage } = require('./LoginPage');
const { AddressPage } = require('./AddressPage')
const {AccountPage} = require('./AccountPage')

exports.POManager = class POManager {

    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.addressPage = new AddressPage(this.page)
        this.accountPage = new AccountPage(this.page)

    }

    getLoginPage() {
        return this.loginPage;
    }

    getAddressPage() {
        return this.addressPage;
    }

    getAccountPage() {
        return this.accountPage;
    }
}