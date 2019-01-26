import Vue from 'vue'
import VueRouter from 'vue-router'

// components
const Home = () => import('@/components/Home.vue')
const Login = () => import('@/components/Login.vue')
const Page404 = () => import('@/components/Page404.vue')
const Page = () => import('@/components/Page.vue')

Vue.use(VueRouter); // 미들웨어 추가

export default new VueRouter({
    mode: 'history',
    linkActiveClass: 'open active',
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/page',
        name: 'Page',
        component: Page
      },
      {
        path: '/login',
        component: Login
      },
      {
        path: '*',
        component: Page404
      }
    ]
  }
)
