const { expect } = require('@playwright/test');


exports.SGProofHomepage = class SGProofHomepage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.productslink = page.locator("//*[@title='Products']");
        this.productslink2 = page.getByRole('link', { name: 'Open Products navigation menu' });
        this.Shopallproductslink = page.locator('#container-6377d06609').getByRole('link', { name: 'Shop All Products' });
        this.AddIconBtn = page.locator('data-testid=AddIcon');
        this.AddtoCartBtn = page.getByRole('button', { name: 'Add to Cart' }).first();
        this.CartNotification = page.locator("//*[@data-total-items='1']");
        this.ItemnameinCart = page.locator("//*[@class='mini-cart-item-name']");
        this.GotoCart = page.getByLabel('Your Carts').getByRole('link');
        this.CheckoutBtn = page.getByRole('button',{name:'Checkout'});
        }
    

    async AddProductstoCart() {
        await this.productslink2.click();
      //  await this.page.waitForTimeout(2000);
        await this.Shopallproductslink.click({timeout: 2000});
        await this.page.goto('https://demo.sgproof.com/search');
        await this.AddIconBtn.first().click({ timeout: 10000 });
        await this.AddtoCartBtn.click({ timeout: 2000 });
        //await this.GotoCart.click();
        //await expect(this.CheckoutBtn).toBeVisible({ timeout: 30000 });

    }
    async VerifyHomepageDisplayed() {
        await expect(this.productslink).toBeVisible({ timeout: 30000 });

    }

    async VerifyCartshowsAddedItem() {
        await expect(this.ItemnameinCart).toBeVisible({ timeout: 5000 });
    }

};
