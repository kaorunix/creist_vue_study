import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SkAbout from '../views/SkAbout.vue'
import SkPrj from '../views/SkProject.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/ks',
    name: 'About'
  },
  {
    path: '/sa',
    name: 'About'
  },
  {
    path: '/hy',
    name: 'About'
  },
  {
    path: '/sk',
    name: 'SkAbout',
    component: SkAbout
  },
  {
    path: '/skPrj',
    name: 'SkProject',
    component: SkPrj
  },
  {
    path: '/ss',
    name: 'About'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
