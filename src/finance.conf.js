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
        'reports': 'Overzichten',
        'upload': 'Uploaden',
        'user': 'Gebruiker',
        'login': 'Inloggen',
        'logout': 'Uitloggen',
        'username': 'Gebruikersnaam',
        'password': 'Wachtwoord',
        'error.login': 'Inloggen mislukt',
        'error.upload': 'Uploaden mislukt',
        'success.upload': 'Uploaden gelukt',
        'placeholder.select-file': 'Selecteer een bestand...'
      }
    },
    en: {
      translation: {
        'navbar-brand': 'Personal expenses',
        'reports': 'Reports',
        'upload': 'Upload',
        'user': 'User',
        'login': 'Login',
        'logout': 'Logout',
        'username': 'User name',
        'password': 'Password',
        'error.login': 'Login failed',
        'error.upload': 'Upload failed',
        'success.upload': 'Upload successful',
        'placeholder.select-file': 'Select file...'
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
