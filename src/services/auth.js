const auth = {
  getAccountLocalstore: function () {
    return JSON.parse(localStorage.getItem('__account'))
  },
  logoutAccount: function () {
    localStorage.removeItem('__account')
  },
  setAccountLocalstore: function (e) {
    localStorage.setItem('__account', JSON.stringify(e))
  }
}

export default auth
