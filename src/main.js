// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'

// Try ES build first
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'

// Import styles if style-loader is available
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App'
import router from './router'
import configuration from './finance.conf'

Vue.prototype.$configuration = configuration
Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
