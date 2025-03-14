const { expect } = require('@playwright/test');


exports.SGProofLoginpage = class SGProofLoginpage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.Username = page.locator('#username');
        this.Password = page.locator('#password');
        this.Loginbtn = page.locator('//*[@value="Log In"]');
    }

    async LoginintoDemoApp() {

        await this.Username.fill('asadminaplnv@yopmail.com');
        await this.Username.press('Tab');
        await this.Password.fill('Sgwsaplnv@2024');
        await this.Loginbtn.click();
        await this.page.waitForTimeout(25000);
    }

    async VerifyLoginLinkAccessed() {
        await expect(this.Loginbtn).toBeVisible();
    }

};
