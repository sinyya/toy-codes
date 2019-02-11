import Vue from 'vue'
import App from './App.vue'

// jquery
import $ from 'jquery'
window.$ = $;

// bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

/**
 * fontAwesome
 * faBell : icon prefix+iconName camelcase
 * prefix
 * - fas : solid style
 * - far : regular style
 */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBell as fasBell} from '@fortawesome/free-solid-svg-icons'
import { faBell as farBell} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(farBell, fasBell)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})

