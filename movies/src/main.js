// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import store from './store/store'

import formatDate from './assets/js/formatDate.js'

Vue.prototype.formatDate=formatDate;

import 'lib-flexible'

Vue.config.productionTip = false

Vue.prototype.$axios=axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
