import Vue from 'vue'
import Vr from 'vue-resource'
import App from './App.vue'

Vue.use(Vr)

new Vue({
  el: '#app',
  render: h => h(App)
})
