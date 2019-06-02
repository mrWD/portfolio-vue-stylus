import dropdown from './components/Dropdown/Dropdown.vue'

export default {
  name: 'app',
  components: { dropdown },
  data: () => ({
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
  }),

  mounted() {
    const search = this.searchInput

    this.$store.dispatch('fetchMovieList', { search })
  },

  computed: {
    moviesList() {
      const { $store, sortBy, filterBy, isAscending } = this
      const { moviesList } = $store.state.movies
      let newList = moviesList

      if (filterBy) {
        newList = newList.filter(({ Type: type }) => type === filterBy)
      }

      const BEFORE = isAscending ? 1 : -1
      const AFTER = isAscending ? -1 : 1

      return newList.slice().sort((item1, item2) => {
        return item1[sortBy] > item2[sortBy] ? BEFORE : AFTER
      })
    },
  },

  methods: {
    fetchMovieList(e) {
      e.preventDefault()

      const search = this.searchInput

      this.$store.dispatch('fetchMovieList', { search })

      this.$router.push('/')
    },

    filter({ value }) {
      this.filterBy = value
    },

    sort({ value, isAscending }) {
      this.sortBy = value
      this.isAscending = isAscending
    },

    test() {

    }
  }
}
