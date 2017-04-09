import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Upload from '@/components/Upload'

Vue.use(Router)

let preventUnAuthenticated = (to, from, next) => {
  if (!Vue.prototype.$auth.loggedIn()) {
    next('/login?redirect=' + encodeURIComponent(to.path))
  } else {
    next()
  }
}

export default new Router({
  routes: [
    {
      path: '/',
      beforeEnter: preventUnAuthenticated
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/upload',
      component: Upload,
      beforeEnter: preventUnAuthenticated
    }
  ]
})
