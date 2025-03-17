// @ts-nocheck
//const { test,expect} = require("../fixtures/basepage")
const {test,expect} = require("../fixtures/basepage")


test('Launch SGProof and Land in Login page', async ({ Demohome,Login,SGProofHome,page  }) => {
  await Demohome.LaunchSGProof_Loginclick();
  //Verifying the Loginlink is accessed
  await Login.VerifyLoginLinkAccessed();
});


test('Launch Login page and Login into Demo App', async ({ Demohome,Login,SGProofHome,page  }) => {

  await Demohome.LaunchSGProof_Loginclick();
  await Login.LoginintoDemoApp();
  await SGProofHome.VerifyHomepageDisplayed();
});


/*

test('Adding First Product to Cart', async ({ page }) => {
  const Demohome = new SGProoflandingpage(page);
  const Login = new SGProofLoginpage(page);
  const SGProofHome = new SGProofHomepage(page);
  await Demohome.LaunchSGProof_Loginclick();
  await Login.LoginintoDemoApp();
  await SGProofHome.AddProductstoCart();

  //It is in process
  // await SGProofHome.VerifyCartshowsAddedItem();
});

*/

