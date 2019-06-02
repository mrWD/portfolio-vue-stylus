import { FETCH_MOVIES_LIST, FETCH_MOVIES_LIST_SUCCESS, FETCH_MOVIES_LIST_ERROR, FETCH_MOVIE, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_ERROR } from '../../constants/movies'

export default {
  [FETCH_MOVIES_LIST](state) {
    state.loading = true
    state.error = null
    state.moviesList = []
  },

  [FETCH_MOVIES_LIST_SUCCESS](state, { payload }) {
    state.loading = false
    state.moviesList = payload
  },

  [FETCH_MOVIES_LIST_ERROR](state, { payload }) {
    state.loading = false
    state.error = payload
  },

  [FETCH_MOVIE](state) {
    state.loading = true
    state.error = null
    state.movie = {}
  },

  [FETCH_MOVIE_SUCCESS](state, { payload }) {
    state.loading = false
    state.movie = payload
  },

  [FETCH_MOVIE_ERROR](state, { payload }) {
    state.loading = false
    state.error = payload
  },
}
