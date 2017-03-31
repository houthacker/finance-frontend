/**
 * @author houthacker
 */

class BackendClient {
  constructor (config, http) {
    this.config = config
    this.http = http
  }

  uploadRecords (options, cb) {
    this.http.post(this.config.upload, options.data)
      .then(response => {
        cb(null, response)
      }, response => {
        cb(response, null)
      })
  }
}

export default BackendClient
