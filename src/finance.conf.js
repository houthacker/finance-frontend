/**
 * @author houthacker
 */
import merge from 'webpack-merge'
let env = process.env.NODE_ENV || 'development'

let production = {
  API: {
    transactions: {
      upload: {
        post: 'http://localhost:3030/transactions'
      },
      uploaded: {
        get: 'http://localhost:3030/transactions'
      }
    },
    auth: {
      login: 'http://localhost:3030/login',
      logout: 'http://localhost:3030/logout'
    }
  },
  i18n: {
    nl: {
      translation: {
        'navbar-brand': 'Huishoudboekje',
        'transactions': 'Transacties',
        'upload': 'Uploaden',
        'user': 'Gebruiker',
        'login': 'Inloggen',
        'logout': 'Uitloggen',
        'username': 'Gebruikersnaam',
        'password': 'Wachtwoord',
        'login.error': 'Inloggen mislukt',
        'upload.error': 'Uploaden mislukt',
        'upload.success': 'Uploaden gelukt',
        'placeholder.select-file': 'Selecteer een bestand...',
        'date': 'Datum',
        'amount': 'Bedrag',
        'actions': 'Acties',
        'counterparty.accountno': 'Tegenrekening',
        'stage-transaction': 'Klaarzetten voor bewerken',
        'unstage-transaction': 'Verwijder uit bewerklijst',
        'description': 'Beschrijving',
        'add-labels': 'Labels toevoegen',
        'cancel': 'Annuleren',
        'save': 'Opslaan',
        'edit-transaction-labels': 'Bewerk __AMOUNT__ transacties',
        'search': 'Zoek',
        'add': 'Toevoegen'
      }
    },
    en: {
      translation: {
        'navbar-brand': 'Personal expenses',
        'transactions': 'Transactions',
        'upload': 'Upload',
        'user': 'User',
        'login': 'Login',
        'logout': 'Logout',
        'username': 'User name',
        'password': 'Password',
        'login.error': 'Login failed',
        'upload.error': 'Upload failed',
        'upload.success': 'Upload successful',
        'placeholder.select-file': 'Select file...',
        'date': 'Date',
        'amount': 'Amount',
        'actions': 'Actions',
        'counterparty.accountno': 'Counter Account no.',
        'stage-transaction': 'Stage for editing',
        'unstage-transaction': 'Remove from edit list',
        'description': 'Description',
        'add-labels': 'Add labels',
        'cancel': 'Cancel',
        'save': 'Opslaan',
        'edit-transaction-labels': 'Edit __AMOUNT__ transactions',
        'search': 'Search',
        'add': 'Add'
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
