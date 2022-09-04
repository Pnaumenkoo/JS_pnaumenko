const Helper = require('@codeceptjs/helper');

class PriceConverter extends Helper {

  getNumericPrice(string) {
    return +string.slice(1);
  }

}

module.exports = PriceConverter;
