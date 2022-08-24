const { Test } = require("mocha");
const { myAccountHeader } = require("./pages/myAccount");

let user = {
    firstName: 'Oleg',
    lastName: 'Test',
    password: '123456789A',
    address: '2163 Greenview Dr',
    city: 'Montgomery',
    state: 'Alabama',
    zipCode: '36111',
    //country: 'United States',
    mobilePhone: '+1' + Date.now(),
    assignAddress: 'My address',
};

Feature('store');

Scenario ('test something', ({ I, homePage, authPage, createAccountPage, myAccountPage}) => {
    I.opernStore();
    homePage.clickSignIn();
    authPage.fillEmail(Date.now()+'@test.com');
    authPage.clickCreateAccount();
    createAccountPage.fillNewAccountFields(user);
    createAccountPage.clickRegister();
    myAccountPage.verifyAcountHeader();
    pause();
    

   /* the same as ->
    I.see ('Women');
    I.click({css:'div.header_user_info'});
    I.waitForVisible ({css: '#email_create'});
    I.fillField ({css: '#email_create'}, '23082022@test.com');*/

}).tag ('auth');







xScenario ('grab something', async ({ I }) => {
    I.amOnPage('http://automationpractice.com/index.php?id_product=3&controller=product');
    let price = await I.grabTextFrom({css: '#our_price_display'});
    console.log (price)

}).tag ('grab');