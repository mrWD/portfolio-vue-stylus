import Vue from 'vue'
import card from '@/components/Card/Card.vue'
import loader from '@/components/Loader/Loader.vue'
import error from '@/components/Error/Error.vue'

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
