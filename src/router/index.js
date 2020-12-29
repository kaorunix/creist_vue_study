import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SkAbout from '../views/SkAbout.vue'
import SkPrj from '../views/SkProject.vue'
import hy from '../views/hy.vue'
import SS from '../views/SS.vue'

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
    path: '/project2',
    name: 'project2',
    component: () => import(/* webpackChunkName: "projetct2" */ '../views/Project2.vue')
  },
  {
    path: '/about2',
    name: 'about2',
    component: () => import(/* webpackChunkName: "about2" */ '../views/About2.vue')
  },
  {
    path: '/hy',
    name: 'hy',
    component: hy
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
    name: 'SS',
    component: SS
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
