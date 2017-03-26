import Vue from 'vue'
import Router from 'vue-router'

import Upload from '@/components/Upload'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: Hello,
        upload: Upload
      }
    }
  ]
})
