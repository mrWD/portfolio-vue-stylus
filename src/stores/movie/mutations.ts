import { MutationTree } from 'vuex'
import { MovieState, ErrorPayload, MoviePayload } from './types'
import { FETCH_MOVIE, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_ERROR } from '../../constants/movies'

const mutations: MutationTree<MovieState> =  {
  [FETCH_MOVIE](state) {
    state.loading = true
    state.error = null
    state.movie = {}
  },

  [FETCH_MOVIE_SUCCESS](state, { payload }: MoviePayload) {
    state.loading = false
    state.movie = payload
  },

  [FETCH_MOVIE_ERROR](state, { payload }: ErrorPayload) {
    state.loading = false
    state.error = payload
  },
}

export default mutations
