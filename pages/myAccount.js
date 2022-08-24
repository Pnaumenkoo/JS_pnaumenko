const { I } = inject();

module.exports = {
  AccountHeader: ('My account' ),

  verifyAccountHeader() {
    I.see(this.AccountHeader)
  }

}
