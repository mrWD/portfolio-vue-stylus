import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './types'
import movies from './movies'
import movie from './movie'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  modules: {
    movies,
    movie,
  },
  strict: true,
}

export default new Vuex.Store<RootState>(store)
