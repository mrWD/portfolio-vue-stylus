import Vue from 'vue'
import { Movie } from './types'
import loader from '@/components/Loader/Loader.vue'
import error from '@/components/Error/Error.vue'
import imgRoutes from '@/constants/imgRoutes'

export default Vue.extend({
  name: 'movie',

  components: { loader, error },

  data() {
    return {
      poster: '',
    }
  },

  mounted() {
    this.$store.dispatch('movie/fetchMovie', this.$route.params.id)
  },

  computed: {
    movie(): Movie {
      const { movie } = this.$store.state.movie
      this.poster = movie && movie.Poster

      return movie || {}
    },

    loading(): boolean {
      return this.$store.state.movie.loading
    },

    error(): string | null {
      return this.$store.state.movie.error
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
