const { I } = inject();

module.exports = {
  accountHeader: 'My account',

  verifyAccountHeader() {
    I.waitForText(this.accountHeader);
    I.see(this.accountHeader);
  }

}
