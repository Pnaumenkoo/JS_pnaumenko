const { I } = inject();

module.exports = {
  proceedToCheckoutButton: 'Proceed to checkout',
  termsOfServiceCheckbox: { css: '#cgv' },
  paymentMethod: ('Pay by bank wire'),
  confirmOrder: ('I confirm my order'),
  totalProductPrice: { css: '#total_price' },
  totalShippingPrice: { css: '#total_shipping' },
  totalTaxPrice: { css: '#total_tax' },
  totalProductCartPrice: { css: '#total_price_container' },
  orderReferenceMsg: { css: '#div.box' },


  async getTotalShippingPrice() {
    let totalShippingPriceAmount = await I.grabTextFrom(this.totalShippingPrice);
    let numberTotalShippingPrice = totalShippingPriceAmount.slice(1);
    return Number(numberTotalShippingPrice);
  },

  async getTotalTaxPrice() {
    let totalTaxPriceAmount = await I.grabTextFrom(this.totalTaxPrice);
    let numberTotalTaxPrice = totalTaxPriceAmount.slice(1);
    return Number(numberTotalTaxPrice);
  },



  async getTotalProductPrice() {
    let totalProductPriceAmount = await I.grabTextFrom(this.totalProductPrice);
    let numberTotalProductPrice = totalProductPriceAmount.slice(1);
    return Number(numberTotalProductPrice);
  },


  verifyCartCheckout() {
    I.waitForText(this.proceedToCheckoutButton);
    I.see(this.proceedToCheckoutButton);
    I.click(this.proceedToCheckoutButton);
    I.waitForText(this.proceedToCheckoutButton);
    I.see(this.proceedToCheckoutButton);
    I.click(this.proceedToCheckoutButton);

    I.waitForText(this.proceedToCheckoutButton);
    I.click(this.termsOfServiceCheckbox);
    I.waitForText(this.proceedToCheckoutButton);
    I.see(this.proceedToCheckoutButton);
    I.click(this.proceedToCheckoutButton);
  },

  async getTotalProductCartPrice() {
    let totalProductCartPriceAmount = await I.grabTextFrom(this.totalProductCartPrice);
    let numberTotalProductCartPrice = totalProductCartPriceAmount.slice(1);
    return Number(numberTotalProductCartPrice);
  },

  selectPaymentMethod() {
    I.click(this.paymentMethod);
  },

  confirmYourOrder() {
    I.waitForText(this.confirmOrder);
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
