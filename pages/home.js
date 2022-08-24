const { I } = inject();

module.exports = {
signInBotton: {css:'div.header_user_info'},

clickSignIn() {
  I.click (this.signInBotton);
 }
}
