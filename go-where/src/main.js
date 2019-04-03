// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
import Axios from 'axios'

import store from './store'

import FastClick from 'fastclick'  //移动端300毫秒点击延迟问题
import 'styles/reset.css'  //重置默认样式
import 'styles/iconfont.css'
import 'styles/border.css'  //移动端1像素问题

FastClick.attach(document.body)

import VueAwesomeSwiper from 'vue-awesome-swiper' //轮播插件
import 'swiper/dist/css/swiper.css'
 
Vue.use(VueAwesomeSwiper)


Vue.config.productionTip = false

// Vue.use(Axios);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
