import Vue from 'vue'
import store from './stores/index'
import router from './router/index'

import App from './App.vue'

new Vue({
  el: "#root",
  router,
  store,
  template: '<App/>',
  components: { App },
})
