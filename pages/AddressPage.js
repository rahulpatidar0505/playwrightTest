exports.AddressPage = class AddressPage {

    constructor(page) {
        this.page = page;
        this.editAddressLink = page.getByRole('link', { name: 'Edit Address' });
        this.firstName = page.getByLabel('First Name');
        this.lastName = page.getByLabel('Last Name');
        this.company = page.getByLabel('Company');
        this.phoneNumber = page.getByLabel('Phone Number');
        this.streetAdress = page.getByRole('textbox', { name: 'Street Address\n* Street Address: Line 1' });
        this.city = page.getByLabel('City');
        this.state = page.locator("//select[@id='region_id']");
        this.zipCode = page.getByLabel('Zip/Postal Code');
        this.country = page.locator("//select[@id='country']");
        this.saveAddressButton = page.getByRole('button', { name: 'Save Address' });
        this.savedAddressText = page.getByText('You saved the address.')
    }

    async fillAddress(firstName, lastName, company, phoneNumber, streetAdress, country, state, city, zipCode) {
        await this.editAddressLink.first().click();
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.company.fill(company);
        await this.phoneNumber.fill(phoneNumber);
        await this.streetAdress.fill(streetAdress);
        await this.country.selectOption(country);
        await this.state.selectOption(state);
        await this.city.fill(city);
        await this.zipCode.fill(zipCode);
        await this.saveAddressButton.click();
    }
}
