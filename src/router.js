import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/restaurants'
    },
    {
      path: '/restaurants',
      name: 'Restaurants',
      component: () => import('./views/Restaurants.vue')
    },
    {
      path: '/caffe-bars',
      name: 'CaffeBars',
      component: () => import('./views/CaffeBars.vue')
    },
    {
      path: '/bars',
      name: 'Bars',
      component: () => import('./views/Bars.vue')
    },
    {
      path: '/thank-you',
      name: 'Thanks',
      component: () => import('./views/Thanks.vue')
    },
    { path: "*",
      component: () => import('./views/PageNotFound.vue')
    }
  ]
})
