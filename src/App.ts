import Vue from 'vue'
import { DataObj, Movie } from './types'
import dropdown from './components/Dropdown/Dropdown.vue'

export default Vue.extend({
  name: 'app',
  components: { dropdown },
  data(): DataObj {
    return {
      searchInput: 'Collateral Beauty',
      filterBy: '',
      sortBy: 'Title',
      isAscending: true,
      sortByList: [
        { value: 'Title', label: 'Name Up', isAscending: true },
        { value: 'Title', label: 'Name Down', isAscending: false },
        { value: 'Year', label: 'Date Up', isAscending: true },
        { value: 'Year', label: 'Date Down', isAscending: false },
      ],
      filterByList: [
        { value: 'movie', label: 'Movies' },
        { value: 'game', label: 'Games' },
      ]
    }
  },

  mounted() {
    const search = this.searchInput

    this.$store.dispatch('movies/fetchMovieList', search)
  },

  computed: {
    moviesList(this: Vue & DataObj): object[] {
      const { $store, sortBy, filterBy, isAscending } = this
      const { moviesList } = $store.state.movies
      let newList = moviesList

      if (filterBy) {
        newList = newList.filter(({ Type: type }: Movie) => type === filterBy)
      }

      const BEFORE = isAscending ? 1 : -1
      const AFTER = isAscending ? -1 : 1

      return newList.slice().sort((item1: Movie, item2: Movie) => {
        return item1[sortBy] > item2[sortBy] ? BEFORE : AFTER
      })
    },
  },

  methods: {
    fetchMovieList(e: any): void {
      e.preventDefault()

      const search = this.searchInput

      this.$store.dispatch('movies/fetchMovieList', search)

      this.$router.push('/')
    },

    filter({ value }: { value: string}): void {
      this.filterBy = value
    },

    sort({ value, isAscending }: { value: string; isAscending: boolean }): void {
      this.sortBy = value
      this.isAscending = isAscending
    },
  },
})
