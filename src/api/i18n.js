/**
 * @author houthacker
 */

class I18n {
  constructor (options) {
    options = options || {}
    this.resources = options.resources || {}
    this.language = options.lng || 'en'
    this.fallbackLanguage = options.fallbackLng || 'en'
  }

  translate (key) {
    let language = this.resources[this.language] || this.resources[this.fallbackLanguage]
    return language.translation[key]
  }

  fixed (language) {
    let lang = this.resources[language] || {}
    return (key) => {
      return lang[key]
    }
  }
}

export default {
  init: function (options, cb) {
    let error = null
    let instance = null

    if (!options) {
      error = new Error('options object is required to initialize i18n')
    } else if (!options.resources) {
      error = new Error('options.resources is required to initialize i18n')
    } else {
      options.lng = options.lng || 'en'
      options.fallbackLng = options.fallbackLng || 'en'

      if (options.resources[options.lng] || options.resources[options.fallbackLng]) {
        instance = new I18n(options)
      } else {
        error = new Error('Neither ' + options.lng + ' nor ' + options.fallbackLng + ' are configured in options.resources')
      }
    }

    cb(instance, error)
  }
}
