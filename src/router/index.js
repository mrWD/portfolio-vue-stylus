import Vue from 'vue'
import Router from 'vue-router'
import MovieList from '../components/MovieList/MovieList.vue'
import Movie from '../components/Movie/Movie.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MovieList',
      component: MovieList,
      props: true,
    },
    {
      path: '/movie/:id?',
      name: 'Movie',
      component: Movie,
    },
  ],
})
