import axios from 'axios'
import { ActionTree } from 'vuex'
import { RootState } from '@/stores/types'
import { MoviesState, MoviesPayload } from './types'
import { FETCH_MOVIES_LIST, FETCH_MOVIES_LIST_SUCCESS, FETCH_MOVIES_LIST_ERROR } from '@/constants/movies'

const actions: ActionTree<MoviesState, RootState> = {
  fetchMovieList({ commit }, search: string): void {
    if (!search) return commit(FETCH_MOVIES_LIST_ERROR, { payload: 'Please, fill the Movie Name field!' })

    commit(FETCH_MOVIES_LIST)

    axios.get(`${process.env.URL}?apikey=${process.env.API_KEY}&s=${search}`)
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

        const payload: MoviesPayload = data.Search

        return commit(FETCH_MOVIES_LIST_SUCCESS, { payload })
      })
      .catch(err => {
        const { message = 'Something went wrong!' } = err

        commit(FETCH_MOVIES_LIST_ERROR, { payload: message })
      })
  },
}

export default actions
