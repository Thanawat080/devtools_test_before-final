import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue') // set home as path '/'
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register.vue') // set register as path '/register'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')// set login as path '/login'
  },
  {
    path: '/createproduct',
    name: 'createproduct',
    component: () => import('../views/createproduct.vue')// set login as path '/login'
  },
  {
    path: '/productinfo/:id',
    name: 'productinfo',
    component: () => import('../views/productinfo.vue')// set login as path '/login'
  },


]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
