// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

import Axios from 'axios';
Vue.prototype.$axios=Axios;
Axios.defaults.baseURL = '/api'
// Axios.defaults.headers.post['Content-Type'] = 'application/json';

import MyUl from './components/common/MyUl'
Vue.component(MyUl.name,MyUl)
import MyLi from './components/common/MyLi'
Vue.component(MyLi.name,MyLi)
import NavBar from './components/common/NavBar'
Vue.component(NavBar.name,NavBar)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
