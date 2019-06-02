import mutations from './mutations/movies.js'
import actions from './actions/movies.js'

const state = {
  loading: false,
  error: null,
  moviesList: [],
  movie: {},
}

export default {
  state,
  mutations,
  actions,
}
