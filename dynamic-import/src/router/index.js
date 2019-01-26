import Vue from 'vue'
import VueRouter from 'vue-router'

//component
const Home = () => import('@/components/Home.vue')
const Page = () => import('@/components/Page.vue')
const Login = () => import('@/components/Login.vue')

Vue.use(VueRouter)

export default new VueRouter({
  mode :'history',
  routes : [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/page',
      name: 'Page',
      component: Page,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    }
  ]
})
