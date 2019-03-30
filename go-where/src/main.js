// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import Axios from 'axios'

import FastClick from 'fastclick'  //移动端300毫秒点击延迟问题
import './assets/styles/reset.css'  //重置默认样式
import './assets/styles/border.css'  //移动端1像素问题

FastClick.attach(document.body)


Vue.config.productionTip = false

Vue.use(Vuex);
// Vue.use(Axios);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
