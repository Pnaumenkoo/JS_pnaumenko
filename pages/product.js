const { I } = inject();

module.exports = {
  productPrice: { css: '#our_price_display' },
  addToCartButton: { css: '#add_to_cart' },
  cartCheckout: ('Proceed to checkout'),

  async getProductPrice() {
    return await I.grabTextFrom(this.productPrice);
    
  },

  clickAddToCart() {
    I.click(this.addToCartButton);
    I.wait(3)
  },

  verifyCart() {
    I.waitForText(this.cartCheckout);
    I.see(this.cartCheckout);
    I.click(this.cartCheckout);
  },



}