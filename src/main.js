// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
'use strict'

import Vue from 'vue'
import VueResource from 'vue-resource'

import router from './router'
import configuration from './finance.conf'
import api from './api'
import Auth from './auth'

import Layout from '@/components/Layout'
import NotAccepted from '@/components/406'

Vue.use(VueResource)
Vue.config.productionTip = false
Vue.component('f-not-accepted', NotAccepted)
Vue.component('f-layout', Layout)

api.i18n.init({
  lng: navigator.language,
  fallbackLng: 'en',
  resources: configuration.i18n
}, (instance, error) => {
  let template = '<f-layout/>'
  let components = {Layout}

  if (error) {
    template = '<f-not-accepted/>'
    components = {NotAccepted}
  }

  // Globally available objects
  Vue.prototype.$t = instance.translate.bind(instance)
  Vue.prototype.$configuration = configuration
  Vue.prototype.$api = new api.Api(configuration.API, Vue.http)
  Vue.prototype.$auth = new Auth(configuration.API.auth)

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    template: template,
    components: components
  })
})
