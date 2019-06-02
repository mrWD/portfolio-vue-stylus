import card from '../Card/Card.vue'
import loader from '../Loader/Loader.vue'
import error from '../Error/Error.vue'

export default {
  name: 'movielist',
  props: ['moviesList'],
  components: { card, loader, error },
  computed: {
    loading() {
      return this.$store.state.movies.loading
    },

    error() {
      return this.$store.state.movies.error
    },
  }
}
