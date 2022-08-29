const { I } = inject();

module.exports = {
  proceedToCheckoutButton: ('Proceed to checkout'),
  termsOfServiceCheckbox: { css: '#cgv' },
  paymentMethod: ('Pay by bank wire'),
  confirmOrder: ('I confirm my order'),
  totalProductPrice: { css: '#total_price' },
  totalShippingPrice: { css: '#total_shipping' },
  totalTaxPrice: { css: '#total_tax' },
  totalProductCartPrice: { css: '#total_price_container' },
  //orderReferenceMsg: (''),


  async getTotalShippingPrice() {
    return await I.grabTextFrom(this.totalShippingPrice);
  },

  async getTotalTaxPrice() {
    return await I.grabTextFrom(this.totalTaxPrice);
  },

  async getTotalProductPrice() {
    return await I.grabTextFrom(this.totalProductPrice);
  },


  verifyCartCheckout() {
    I.waitForText(this.proceedToCheckoutButton);
    I.see(this.proceedToCheckoutButton);
    I.click(this.proceedToCheckoutButton);
    I.waitForText(this.proceedToCheckoutButton);
    I.see(this.proceedToCheckoutButton);
    I.click(this.proceedToCheckoutButton);

    I.wait(2);
    I.click(this.termsOfServiceCheckbox);
    I.waitForText(this.proceedToCheckoutButton);
    I.see(this.proceedToCheckoutButton);
    I.click(this.proceedToCheckoutButton);
  },

  async getTotalProductCartPrice() {
    return await I.grabTextFrom(this.totalProductCartPrice);
  },

  selectPaymentMethod() {
    I.click(this.paymentMethod);
  },

  confirmYourOrder() {
    I.click(this.confirmOrder);
  },

 /* async getReferenceMsg() {
    return await I.grabTextFromAll();
  }*/
};



  //I.assertEqual(current value 27.00, expected value 27.00 from a cart, 'Prices are different')





