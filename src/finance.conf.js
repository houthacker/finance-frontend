/**
 * @author houthacker
 */
import merge from 'webpack-merge'
let env = process.env.NODE_ENV || 'development'

let production = {
  API: {
    upload: 'http://localhost:3030/upload',
    auth: {
      login: 'http://localhost:3030/login',
      logout: 'http://localhost:3030/logout'
    }
  },
  i18n: {
    nl: {
      translation: {
        'navbar-brand': 'Huishoudboekje',
        'reports': 'Overzichten'
      }
    },
    en: {
      translation: {
        'navbar-brand': 'Personal expenses',
        'reports': 'Reports'
      }
    }
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
