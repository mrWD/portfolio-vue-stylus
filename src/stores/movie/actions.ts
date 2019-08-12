import axios from 'axios'
import { ActionTree } from 'vuex'
import { RootState } from '@/stores/types'
import { MovieState, MoviePayload } from './types'
import { FETCH_MOVIE, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_ERROR } from '@/constants/movies'

const actions: ActionTree<MovieState, RootState>= {
  fetchMovie({ commit }, id: string): void {
    commit(FETCH_MOVIE)

    axios.get(`${process.env.URL}?apikey=${process.env.API_KEY}&i=${id}`)
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

        const payload: MoviePayload = data

        return commit(FETCH_MOVIE_SUCCESS, { payload })
      })
      .catch(err => {
        const { message = 'Something went wrong!' } = err

        commit(FETCH_MOVIE_ERROR, { payload: message })
      })
  },
}

export default actions
