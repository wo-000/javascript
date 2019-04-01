import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home/Home'
import City from '@/City/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/City',
      name: 'City',
      component: City
    }
  ]
})
