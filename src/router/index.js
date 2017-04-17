'use strict'

import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Upload from '@/components/Upload'
import UploadedTransactions from '@/components/UploadedTransactions'

Vue.use(Router)

let preVueLoginCheck = function () {
  let token = localStorage.getItem('auth.token')
  return token && typeof token === 'string'
}

let preventUnAuthenticated = (to, from, next) => {
  if (!preVueLoginCheck()) {
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
      path: '/transactions/upload',
      component: Upload,
      beforeEnter: preventUnAuthenticated
    },
    {
      path: '/transactions/list',
      component: UploadedTransactions,
      beforeEnter: preventUnAuthenticated
    }
  ]
})
