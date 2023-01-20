class AccountPage{

    constructor(page){
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

    }
}

module.exports = {AccountPage}