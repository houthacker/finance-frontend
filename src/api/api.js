/**
 * @author houthacker
 */

class Api {
  constructor (config, http) {
    this.config = config
    this.http = http
  }

  uploadRecords (options, cb) {
    this.http.post(this.config.upload, options.data)
      .then(response => {
        cb(null, response)
      }, error => {
        cb(error, null)
      })
  }
}

export default Api
