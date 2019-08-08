import Vue from 'vue'
import imgRoutes from '../../constants/imgRoutes'

export default Vue.extend({
  name: 'card',
  props: ['movie'],
  methods: {
    imageHandlerError(e: any) {
      const imgRoute = imgRoutes[this.$props.movie.Type] || imgRoutes.default

      if (e.target.src.includes(imgRoute)) return

      e.target.src = imgRoute
    },
  }
})
