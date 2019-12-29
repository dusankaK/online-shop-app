import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import AllShops from '../views/AllShops.vue'
import AllManagers from '../views/AllManagers.vue'
import SingleManager from '../views/SingleManager'
import SingleShop from '../views/SingleShop'

import store from './../store/index'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'shops',
    component: AllShops,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      guest:true
    }
  },
  { 
    path:'/register',
    name: 'register',
    component: Register,
    meta: {
      guest:true
    }
  },
  {
    path: '/managers',
    name: 'managers',
    component: AllManagers,
  },
  {
    path: '/single-manager',
    name: 'single-manager',
    component: SingleManager,
  },
  {
    path: '/single-shop',
    name: 'single-shop',
    component: SingleShop,
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isUserLoggedIn = store.getters.isUserAuthenticated
  if (!to.meta.guest && !isUserLoggedIn) {
    next({
      name: 'login',
      path: '/login'
    })
  }
  return next()
})

export default router
