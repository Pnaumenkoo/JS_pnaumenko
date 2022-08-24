let user = {
    firstName: 'Oleg',
    state: 'Alaska',
};

Feature('store');

Scenario ('test something', ({ I, homePage, authPage,createAccountPage }) => {
    I.opernStore();
    homePage.clickSignIn();
    authPage.fillEmail(Date.now()+'@test.com');
    authPage.clickCreateAccount();
    createAccountPage.fillNewAccountFields(user);
    pause ();

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