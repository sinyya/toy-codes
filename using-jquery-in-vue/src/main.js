import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'
window.$ = $;

new Vue({
  el: '#app',
  render: h => h(App)
})
