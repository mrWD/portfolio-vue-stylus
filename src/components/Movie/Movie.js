import loader from '../Loader/Loader.vue'
import error from '../Error/Error.vue'
import imgRoutes from '../../constants/imgRoutes'

export default {
  name: 'movie',

  components: { loader, error },

  data: () => ({
    poster: '',
  }),

  mounted() {
    const { id } = this.$route.params

    this.$store.dispatch('fetchMovie', { id })
  },

  computed: {
    movie() {
      const { movie } = this.$store.state.movies
      this.poster = movie.Poster

      return movie
    },

    loading() {
      return this.$store.state.movies.loading
    },

    error() {
      return this.$store.state.movies.error
    },
  },

  methods: {
    imageHandlerError() {
      this.poster = this.setPoster()
    },

    isExist() {
      return Array.from(arguments).some(item => item && item !== 'N/A')
    },

    setPoster() {
      return imgRoutes[this.movie.Type] || imgRoutes.default
    },
  },
}
