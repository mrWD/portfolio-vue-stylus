import Vue from 'vue'
import store from './stores'
import router from './router'

import App from './App.vue'

new Vue({
  el: "#root",
  router,
  store,
  template: '<App/>',
  components: { App },
})
