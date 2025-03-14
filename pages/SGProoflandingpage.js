const { test, expect, bind } = require('@playwright/test');

exports.SGProoflandingpage = class SGProoflandingpage {

    /**
     * @param {import('@playwright/test').Page} page
     */


    constructor(page) {
        
        this.page = page;
        this.Loginlink = page.getByText('Log In');
        this.Yes_State = page.getByRole('button', { name: 'Yes' });
    }

    async LaunchSGProof_Loginclick() {
        await this.page.goto('https://demo.sgproof.com/');
        await this.page.getByLabel('Select State').selectOption('100');

        //used Element locators from constructor
        await this.Yes_State.click();
        await this.page.waitForTimeout(7000);

        //used Element locators from constructor
        await this.Loginlink.first().click();
        await this.page.waitForTimeout(15000);
    }


};
