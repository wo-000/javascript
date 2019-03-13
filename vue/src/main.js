// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false

/* eslint-disable no-new */

const store=new Vuex.Store({
  state:{
    count:0,
    list:[0,1,6,10,26]
  },
  mutations:{
    add(state,n=3){
      state.count+=n;
    },
    reduce(state){
      state.count--;
    }
  },
  getters:{
    filterList:state=>{
      return state.list.filter(item=>item<10)
    }
  }
})

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
