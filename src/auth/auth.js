/**
 * @author houthacker
 */

class Auth {

  constructor (config) {
    this.config = config
  }

  login (credentials, cb) {
    if (!this.loggedIn()) {
      localStorage.setItem('auth.token', 'TOKEN')
    }
    if (cb) {
      cb({}, null)
    }
  }

  logout (cb) {
    if (this.loggedIn()) {
      localStorage.removeItem('auth.token')
    }
    if (cb) {
      cb({}, null)
    }
  }

  loggedIn () {
    let token = localStorage.getItem('auth.token')
    return token && typeof token === 'string'
  }
}

export default Auth
