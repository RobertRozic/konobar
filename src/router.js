import Vue from 'vue'
import Router from 'vue-router'

import adminRoutes from '@/views/admin/router';

Vue.use(Router)

export default new Router({
    mode: 'history',
    linkActiveClass: 'active',
    base: process.env.BASE_URL,
    routes: [
        ...adminRoutes,
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
        {
            path: '/object/:id',
            name: 'Place', //Object is a reserved word
            component: () => import('./views/Object.vue')
        },
        {
            path: '/review',
            name: 'WriteReview',
            component: () => import('./views/WriteReview.vue')
        },
        {
            path: '/reviews/verify/:token',
            name: 'VerifyReview',
            component: () => import('./views/VerifyReview.vue')
        },
        { path: "*",
            component: () => import('./views/PageNotFound.vue')
        }
    ]
})
