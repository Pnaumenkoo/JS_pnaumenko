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

Before(({ I }) => {
    I.openStore();
});

xScenario('create account', ({ I, homePage, authPage, createAccountPage, myAccountPage }) => {
    homePage.clickSignIn();
    authPage.fillRegistrationEmail(Date.now() + '@test.com');
    authPage.clickCreateAccount();
    createAccountPage.fillNewAccountFields(user);
    createAccountPage.clickRegister();
    myAccountPage.verifyAccountHeader();

}).tag('reg');


Scenario('buy product', async ({ I, homePage, authPage, myAccountPage, productPage, cartPage }) => {
    homePage.clickSignIn();
    authPage.login('1661344566222@test.com', '123456789A');
    myAccountPage.verifyAccountHeader();
    I.amOnPage('http://automationpractice.com/index.php?id_product=2&controller=product');

    let productPrice = await productPage.getProductPrice();
    console.log(productPrice);

    productPage.clickAddToCart();
    productPage.verifyCart();

    let totalShippingPrice = await cartPage.getTotalShippingPrice();
    console.log(totalShippingPrice);

    let totalTaxPrice = await cartPage.getTotalTaxPrice();
    console.log(totalTaxPrice);

    let totalProductPrice = await cartPage.getTotalProductPrice();
    console.log(totalProductPrice);

    cartPage.verifyCartCheckout();

    let totalProductCartPrice = await cartPage.getTotalProductCartPrice();
    console.log(totalProductCartPrice);

    cartPage.selectPaymentMethod();
    cartPage.confirmYourOrder();

    I.assertEqual(totalProductPrice, totalProductCartPrice, 'Prices are not in match');

    let referenceCode = await cartPage.getConfirmationReference();
    console.log(referenceCode);
   

}).tag('buy');





