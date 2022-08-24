const { I } = inject();

module.exports = {

  firstNameInput: { css: '#customer_firstname' },
  lastNameInput: { css: '#customer_lastname' },
  passwordInput: { css: '#passwd' },
  addressInput: { css: '#address1' },
  cityInput: { css: '#city' },
  zipCodeInput: { css: '#postcode' },
  stateDropDown: { css: '#id_state' },
  //countryDropDown: {css:'#id_country'},
  mobilePhoneInput: { css: '#phone_mobile' },
  assignAddressInput: { css: '#alias' },
  registerButton: { css: '#submitAccount' },

  fillNewAccountFields(user) {
    I.waitForVisible(this.firstNameInput);
    I.fillField(this.firstNameInput, user.firstName);
    I.fillField(this.lastNameInput, user.lastName);
    I.fillField(this.passwordInput, secret(user.password));
    I.fillField(this.addressInput, user.address);
    I.fillField(this.cityInput, user.city);

    I.click(this.stateDropDown);
    I.selectOption(this.stateDropDown, user.state);
    //I.click(this.countryDropDown);
    //I.selectOption (this.countryDropDown, user.country);

    I.fillField(this.zipCodeInput, user.zipCode);
    I.fillField(this.mobilePhoneInput, user.mobilePhone);
    I.fillField(this.assignAddressInput, user.assignAddress);
  },
  clickRegister() {
    I.click(this.registerButton);
  }

}