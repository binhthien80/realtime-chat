// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/store'
import auth from '@/services/auth'
import Snotify from 'vue-snotify'
import VueFire from 'vuefire'
import VueSocketio from 'vue-socket.io'

import '@/assets/scss/main.scss'
import 'vue-snotify/styles/material.css' // or dark.css or simple.css

Vue.config.productionTip = false

Vue.use(Snotify, {
  toast: {
    timeout: 1000
  },
  showProgressBar: true,
  closeOnClick: false,
  pauseOnHover: true
})
Vue.use(VueFire)
Vue.use(new VueSocketio({
  debug: true,
  connection: 'http://localhost:8888',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  }
}))
Vue.use(require('vue-moment'))

router.beforeEach((to, from, next) => {
  if (to.path === 'register') {
    return next()
  }
  if (to.path !== '/login') {
    !auth.getAccountLocalstore() ? next('/login') : next()
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
