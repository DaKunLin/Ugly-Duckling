import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/index.vue'),
    children:[ 
      {
        path: '/customInfo',
        name: 'customInfo',
        component: () => import(/* webpackChunkName: "about" */ '../views/customInfo/index.vue')
      }
    ]
  },
  //login登录页面
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
