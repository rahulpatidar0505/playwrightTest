const { LoginPage } = require('./LoginPage');
const { AddressPage } = require('./AddressPage')

exports.POManager = class POManager {

    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.addressPage = new AddressPage(this.page)

    }

    getLoginPage() {
        return this.loginPage;
    }

    getAddressPage() {
        return this.addressPage;
    }
}