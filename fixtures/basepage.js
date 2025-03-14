const base = require("@playwright/test");
const {SGProofHomepage} = require("../pages/SGProofHomepage");
const {SGProofLoginpage} = require("../pages/SGProofLoginpage");
const {SGProoflandingpage} = require("../pages/SGProoflandingpage");

exports.test = base.test.extend({
    Demohome: async ({page},use)=>{
    const Demohome = new SGProoflandingpage(page);
    //Want to perform testbefore code here

    await use(Demohome);

    //want to perform testafterall func
    
},
Login: async ({page},use)=>{
    const Login = new SGProofLoginpage(page);
    await use(Login);
},
SGProofHome: async ({page},use)=>{
    const SGProofHome = new SGProofHomepage(page);
    await use(SGProofHome);
},


});
exports.expect = base.expect;