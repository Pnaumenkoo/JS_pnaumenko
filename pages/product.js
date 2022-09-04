const { I } = inject();

module.exports = {
  productPrice: { css: '#our_price_display' },
  addToCartButton: { css: '#add_to_cart' },
  cartCheckout: 'Proceed to checkout',

  async getProductPrice() {
    let productPriceAmount = await I.grabTextFrom(this.productPrice);
    let numberProductPrice = productPriceAmount.slice(1);
    return Number(numberProductPrice);
    
  },

   clickAddToCart() {
    I.waitForVisible(this.addToCartButton);
    I.click(this.addToCartButton);

  },

  verifyCart() {
    I.waitForText(this.cartCheckout);
    I.see(this.cartCheckout);
    I.click(this.cartCheckout);
  },



}