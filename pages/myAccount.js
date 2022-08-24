const { I } = inject();

module.exports = {
  myAccountHeader: {css: '#My account'},

  verifyAcountHeader (){
    I.see(this.myAccountHeader);
  }
}
