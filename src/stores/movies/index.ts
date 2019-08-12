import { Module } from 'vuex'
import { RootState } from '@/stores/types'
import { MoviesState } from './types'
import mutations from './mutations'
import actions from './actions'

export const state: MoviesState = {
  loading: false,
  error: null,
  moviesList: [],
}

const namespaced: boolean = true
const movies: Module<MoviesState, RootState> = {
  state,
  mutations,
  actions,
  namespaced,
}

export default movies
