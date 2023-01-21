exports.AccountPage = class AccountPage {

    constructor(page) {
        this.page = page;
        this.men = page.getByRole('menuitem', { name: ' Men' });
        this.tops = page.getByRole('menuitem', { name: ' Tops' });
        this.jacket = page.getByRole('menuitem', { name: 'Jackets' });
        this.montanaWindJacket = page.getByRole('link', { name: 'Montana Wind Jacket' });
        this.size = page.getByRole('option', { name: 'M' });
        this.color = page.getByRole('listbox', { name: 'Color' });
        this.addToCartButton = page.getByRole('button', { name: 'Add to Cart' })

        this.landoZymJacket = page.getByRole('link', { name: 'Lando Gym Jacket' });

        this.bottoms = page.getByRole('menuitem', { name: ' Bottoms' });
        this.pants = page.getByRole('menuitem', { name: 'Pants' });
        this.zepplineYogaPant = page.getByRole('link', { name: 'Zeppelin Yoga Pant' });

        this.myCart = page.getByRole('link', { name: ' My Cart 3 3\nitems' })
        this.proceedToCheckout = page.getByRole('button', { name: 'Proceed to Checkout' });


        this.productList = page.locator(".product.name.product-item-name")
        this.productSizeList = page.locator("//div[@class='swatch-option text'][@role='option']")
        this.productColorList = page.locator("//div[@class='swatch-option color']")
        this.productName = page.locator("//h1[@class = 'page-title']//span[@itemprop=\"name\"]")
        this.productPrice = page.locator("//div[contains(@class,'product-info-price')]//span[contains(@id,'product-price')]//span[@class='price']")

    }

    async selectJacket() {
        await this.men.hover()
        await this.tops.hover()
        await this.jacket.click()
    }

    async selectPant() {
        await this.page.hover(this.men)
        await this.page.hover(this.bottoms)
        await this.pants.click()
    }

    async selectProductName(productName) {
        for (let index = 0; index < this.productList.length; index++) {
            const product = array[index];
            if (product.getText().contains(productName)) {
                product.click();
                break;
            }
        }
    }

    async selectProductSize(productSize) {
        for (let index = 0; index < this.productSizeList.length; index++) {
            const size = array[index];
            if (size.getText().contains(productSize)) {
                size.click();
                break;
            }
        }
    }
    
    async selectProductColor(productColor) {
        for (let index = 0; index < this.productColorList.length; index++) {
            const color = array[index];
            if (color.getAttribute("aria-label").contains(productColor)) {
                color.click();
                break;
            }
        }
    }

    async selectSpecificProduct(productName, productSize, productColor) {
        this.page.pause()
        this.selectProductName(productName);
        this.selectProductSize(productSize);
        this.selectProductColor(productColor);
        // this.addToCartButton.click();
    }

    async goToCartAndCheckout() {
        this.myCart.click();
        this.proceedToCheckout.click();
    }

    async getProductName() {
        return this.getProductLocator().textContent();
    }

    async getProductPrice() {

    }

    getProductLocator(productName)
    {
        return this.page.getByRole('link', { name: ''+productName+'' });
    }
}
