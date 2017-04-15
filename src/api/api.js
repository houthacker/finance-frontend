/**
 * @author houthacker
 */
import Auth from '../auth'

class Api {
  constructor (vue, config, http) {
    this.vue = vue
    this.config = config
    this.http = http
    this.auth = new Auth(config.auth)
  }

  login (credentials) {
    let self = this
    this.auth.login(credentials, function (response, error) {
      if (error) {
        self.vue.$emit('login.error', error)
      } else {
        self.vue.$emit('login')
      }
    })
  }

  logout () {
    let self = this
    this.auth.logout(function (response, error) {
      if (error) {
        self.vue.$emit('logout.error', error)
      } else {
        self.vue.$emit('logout')
      }
    })
  }

  loggedIn () {
    return this.auth.loggedIn()
  }

  uploadRecords (options, cb) {
    this.http.post(this.config.transactions.upload.post, options.data)
      .then(response => {
        cb(response, null)
      }, error => {
        cb(null, error)
      })
  }

  getUploadedRecords (cb) {
    this.http.get(this.config.transactions.uploaded.get)
      .then(response => {
        cb(response, null)
      }, error => {
        cb(null, error)
      })
  }
}

export default Api
