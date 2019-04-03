import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home/Home'
import City from '@/City/City'
import Detail from '@/detail/Detail'

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
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {  
    return {x:0,y:0}
  }
})
