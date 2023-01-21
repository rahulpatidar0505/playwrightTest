exports.CheckoutPage =  class CheckoutPage{
    
    constructor(page){
        this.page = page;

        this.prderSummaryText = page.getByText('Order Summary');
        this.shipHere = page.getByRole('button', { name: 'Ship Here' });
        this.shippingMethod = page.getByRole('radio', { name: 'Fixed Flat Rate' });
        this.nextButton = page.getByRole('button', { name: 'Next' });
        this.placeOrderButton = page.getByRole('button', { name: 'Place Order' });
        this.thanksPurchaseMsg = page.getByText('Thank you for your purchase!');

        this.myorderLink = page.getByRole('link', { name: 'My Orders' })
    }

    async placeOrder(){
        await this.shipHere.click();
        await this.shippingMethod.click();
        await this.nextButton.click()
        await this.placeOrderButton.click()
    }

    async goToMyOrders() {
        await this.myorderLink.click()
    }
}
