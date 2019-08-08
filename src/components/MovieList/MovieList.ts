import Vue from 'vue'
import card from '../Card/Card.vue'
import loader from '../Loader/Loader.vue'
import error from '../Error/Error.vue'

export default Vue.extend({
  name: 'movielist',
  props: ['moviesList'],
  components: { card, loader, error },
  computed: {
    loading(): boolean {
      return this.$store.state.movies.loading
    },

    error(): string | null {
      return this.$store.state.movies.error
    },
  }
})
