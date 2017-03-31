/**
 * @author houthacker
 */
import merge from 'webpack-merge'
let env = process.env.NODE_ENV || 'development'

let production = {
  API: {
    upload: 'http://localhost:3030/upload'
  }
}

let development = merge(production, {})
let testing = merge(development, {})

let configuration = {
  production,
  development,
  testing
}

export default configuration[env]
