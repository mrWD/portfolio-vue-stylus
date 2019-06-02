import imgRoutes from '../../constants/imgRoutes'

export default {
  name: 'card',
  props: ['movie'],
  methods: {
    imageHandlerError(e) {
      const imgRoute = imgRoutes[this.$props.movie.Type] || imgRoutes.default

      if (e.target.src.includes(imgRoute)) return

      e.target.src = imgRoute
    },
  }
}
