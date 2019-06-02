import axios from 'axios'
import { FETCH_MOVIES_LIST, FETCH_MOVIES_LIST_SUCCESS, FETCH_MOVIES_LIST_ERROR, FETCH_MOVIE, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_ERROR } from '../../constants/movies'

export default {
  fetchMovieList({ commit }, { search }) {
    if (!search) return commit(FETCH_MOVIE_ERROR, { payload: 'Please, fill the Movie Name field!' })

    commit(FETCH_MOVIES_LIST)

    axios.get(`http://www.omdbapi.com/?apikey=c3d3af33&s=${search}`)
      .then(response => {
        if (response.status < 500) {
          return response
        }

        throw new Error('An error has occurred. Please try again later.')
      })
      .then(({ data }) => {
        if (!data) {
          throw new Error('Something went wrong!')
        }

        const { Response: response, Error: error } = data

        if (!response || response === 'False') {
          throw new Error(error)
        }

        return commit(FETCH_MOVIES_LIST_SUCCESS, { payload: data.Search })
      })
      .catch(err => {
        const { message = 'Something went wrong!' } = err

        commit(FETCH_MOVIES_LIST_ERROR, { payload: message })
      })
  },

  fetchMovie({ commit }, { id }) {
    commit(FETCH_MOVIE)

    axios.get(`http://www.omdbapi.com/?apikey=c3d3af33&i=${id}`)
      .then(response => {
        if (response.status < 500) {
          return response
        }

        throw new Error('An error has occurred. Please try again later.')
      })
      .then(({ data }) => {
        if (!data) {
          throw new Error('Something went wrong!')
        }

        const { Response: response, Error: error } = data

        if (!response || response === 'False') {
          throw new Error(error)
        }

        return commit(FETCH_MOVIE_SUCCESS, { payload: data })
      })
      .catch(err => {
        const { message = 'Something went wrong!' } = err

        commit(FETCH_MOVIE_ERROR, { payload: message })
      })
  },
}
