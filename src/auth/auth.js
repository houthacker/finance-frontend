/**
 * @author houthacker
 */

class Auth {

  constructor (backend) {
    this.backend = backend
  }

  login (credentials, cb) {
    console.log(credentials)
    if (!this.loggedIn()) {
      sessionStorage.setItem('auth.token', 'TOKEN')
    }
    if (cb) {
      cb(true)
    }
  }

  logout (cb) {
    if (this.loggedIn()) {
      sessionStorage.removeItem('auth.token')
    }
    if (cb) {
      cb()
    }
  }

  loggedIn () {
    let token = sessionStorage.getItem('auth.token')
    return token && typeof token === 'string'
  }
}

export default Auth
