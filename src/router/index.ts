import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieList from '@/components/MovieList/MovieList.vue'
import Movie from '@/components/Movie/Movie.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',

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
