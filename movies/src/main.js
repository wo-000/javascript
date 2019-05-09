// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import store from './store/store'
import VueLazyLoad from 'vue-lazyload'
import VueScroller from 'vue-scroller'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI,{
  lazyload:{
    loading: require('./assets/imglazyload.gif'),
  }
})
Vue.use(VueLazyLoad,{
  loading:require('./assets/imglazyload.gif')
})
Vue.use(VueScroller)

Vue.use(VueAwesomeSwiper)

import formatDate from './assets/js/formatDate.js'

Vue.prototype.formatDate=formatDate;

import 'lib-flexible'

Vue.config.productionTip = false

Vue.prototype.$axios=axios

axios.interceptors.request.use((config) => {
        MintUI.Indicator.open('加载中...');
          return config;
        }, (err) => {
        return Promise.reject(err)
})
axios.interceptors.response.use((config) => {
          MintUI.Indicator.close();
            return config;
          }, (err) => {
          return Promise.reject(err)
  })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
