const { values } = require("lodash");
const { extGlobChars } = require("picomatch/lib/constants");
const { catchError } = require("rxjs");

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


Scenario('buy product', async ({ I, homePage, authPage, myAccountPage, productPage }) => {
    homePage.clickSignIn();
    authPage.login('1661344566222@test.com', '123456789A');
    myAccountPage.verifyAccountHeader();
    I.amOnPage('http://automationpractice.com/index.php?id_product=2&controller=product');
    let productPrice = await productPage.getProductPrice();
    console.log(productPrice);

    //I.assertEqual(current value 29.00, expected value 29.00 from a cart, 'Prices are different')


    //create object gpa'Product page', add a product to a cart -> press checkout
    //from product page grab price gpa (assertEqual), 
    //compare a price to total price in shopping-cart summary (const=total shiping) -> grab shipping price, grab total price,
    //compare 29=29 assertEqual
    //click on checkbox (terms of service )-> procced to checkout ->choose payment-> confirm order
    //console ORDER REFERENCE -sub string 27-30 element

}).tag('buy');

/*After(({ I }) => {
    I.openStore();
});*/ //eg. after finishing scenario -> logout, delete/clean files
