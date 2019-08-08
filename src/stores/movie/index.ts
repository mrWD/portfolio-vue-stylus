import { Module } from 'vuex'
import { RootState } from '../types'
import { MovieState } from './types'
import mutations from './mutations'
import actions from './actions'

export const state: MovieState = {
  loading: false,
  error: null,
  movie: {},
}

const namespaced: boolean = true
const movie: Module<MovieState, RootState> = {
  state,
  mutations,
  actions,
  namespaced,
}

export default movie
