import Vue from 'vue'
import Router from 'vue-router'
import Movies from '@/components/movies/movies'
import Cinema from '@/components/cinema/cinema'
import User from '@/components/user/user'
import Search from '@/components/search/search'
import MovieDetail from '@/components/movieDetail/movieDetail'
import CinemaShow from '@/components/cinemaShow/cinemaShow'
import City from '@/components/city/city'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Movies',
      component: Movies
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Movies
    },
    {
      path:'/movies/:id',
      name:MovieDetail,
      component:MovieDetail
    },
    {
      path: '/cinema',
      name: 'Cinema',
      component: Cinema
    },
    {
      path: '/cinema/:id/:movieId',
      name: 'Cinema',
      component: CinemaShow
    },
    {
      path: '/cinema/:id',
      name: 'Cinema',
      component: CinemaShow
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
