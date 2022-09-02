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
  orderReferenceMsg: { css: '#div.box' },


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

  async getConfirmationReference() {
    let orderReference = await I.grabTextFromAll(this.orderReferenceMsg);
    let orderReferenceString = orderReference.join();
    let referenceCodeSearch = orderReferenceString.search("reference");
    let referenceCode = orderReferenceString.slice(referenceCodeSearch + 10, referenceCodeSearch + 20);
    return referenceCode;
  }
  
};

//let string = 'our text';
//let referenceCode = string.slice(180,189);
//console.log(referenceCode)








