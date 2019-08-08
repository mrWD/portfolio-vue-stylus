import Vue from 'vue'
import { Movie } from './types'
import loader from '../Loader/Loader.vue'
import error from '../Error/Error.vue'
import imgRoutes from '../../constants/imgRoutes'

export default Vue.extend({
  name: 'movie',

  components: { loader, error },

  data() {
    return {
      poster: '',
    }
  },

  mounted(): void {
    const { id } = this.$route.params

    this.$store.dispatch('fetchMovie', id)
  },

  computed: {
    movie(): Movie {
      const { movie } = this.$store.state.movies
      this.poster = movie.Poster

      return movie
    },

    loading(): boolean {
      return this.$store.state.movies.loading
    },

    error(): object | string | null {
      return this.$store.state.movies.error
    },
  },

  methods: {
    imageHandlerError(): void {
      this.poster = imgRoutes[this.movie.Type] || imgRoutes.default
    },

    isExist(): boolean {
      return Array.from(arguments).some(item => item && item !== 'N/A')
    },
  },
})
