import { MutationTree } from 'vuex'
import { MoviesState, ErrorPayload, MoviesPayload } from './types'
import { FETCH_MOVIES_LIST, FETCH_MOVIES_LIST_SUCCESS, FETCH_MOVIES_LIST_ERROR } from '@/constants/movies'

const mutations: MutationTree<MoviesState> = {
  [FETCH_MOVIES_LIST](state): void {
    state.loading = true
    state.error = null
    state.moviesList = []
  },

  [FETCH_MOVIES_LIST_SUCCESS](state, { payload }: MoviesPayload): void {
    state.loading = false
    state.moviesList = payload
  },

  [FETCH_MOVIES_LIST_ERROR](state, { payload }: ErrorPayload): void {
    state.loading = false
    state.error = payload
  },
}

export default mutations
