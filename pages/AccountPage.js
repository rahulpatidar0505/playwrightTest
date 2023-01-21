exports.AccountPage = class AccountPage {

    constructor(page) {
        this.page = page;
        this.men = page.getByRole('menuitem', { name: ' Men' });
        this.tops = page.getByRole('menuitem', { name: ' Tops' });
        this.jacket = page.getByRole('menuitem', { name: 'Jackets' });
        this.bottoms = page.getByRole('menuitem', { name: ' Bottoms' });
        this.pants = page.getByRole('menuitem', { name: 'Pants' });

        this.addToCartButton = page.getByRole('button', { name: 'Add to Cart' })

        this.myCart = page.locator("//a[@class='action showcart']")
        this.proceedToCheckout = page.locator("//button[@id='top-cart-btn-checkout']");

        this.productName = page.locator("//h1[@class = 'page-title']//span[@itemprop=\"name\"]")
        this.productPrice = page.locator("//div[contains(@class,'product-info-price')]//span[contains(@id,'product-price')]//span[@class='price']")

    }

    async selectJacket() {
        await this.men.hover()
        await this.tops.hover()
        await this.jacket.click()
    }

    async selectPant() {
        await this.men.hover()
        await this.bottoms.hover()
        await this.pants.click()
    }

    // async getProductName() {
    //     await this.page.textContent(this.productName)

    // }

    // async getProductPrice() {

    // }

    getProductNameLocator(productName)
    {
        return this.page.getByRole('link', { name: ''+productName+'' });
    }

    getProductSizeLocator(productSize)
    {
        return this.page.getByRole('option', { name: ''+productSize+'' });;
    }

    getProductColorLocator(productColor)
    {
        return this.page.getByRole('option', { name: ''+productColor+'' });;
    }

    async selectSpecificProduct(productName, productSize, productColor) {
        this.page.pause()
        await this.getProductNameLocator(productName).first().click()
        await this.getProductSizeLocator(productSize).first().click()
        await this.getProductColorLocator(productColor).first().click()
        await this.addToCartButton.click();
    }


    async goToCartAndCheckout() {
        await this.myCart.click();
        await this.proceedToCheckout.click();
    }
}
