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
            path: '/admin',
            name: 'Admin',
            component: () => import('./views/admin/Home.vue')
        },
        {
            path: '/admin/users',
            name: 'Users',
            component: () => import('./views/admin/Users.vue')
        },
        {
            path: '/admin/employees',
            name: 'MyEmployees',
            component: () => import('./views/admin/Employees.vue')
        },
        {
            path: '/admin/my-employees/:id',
            name: 'MyEmployee',
            component: () => import('./views/admin/MyEmployee.vue')
        },
        {
            path: '/admin/units',
            name: 'Units',
            component: () => import('./views/admin/Units.vue')
        },
        {
            path: '/admin/my-units/:id',
            name: 'MyUnit',
            component: () => import('./views/admin/MyUnit.vue')
        },
        {
            path: '/admin/login',
            name: 'Login',
            component: () => import('./views/admin/Login.vue')
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
            path: '/rate/object/:id',
            name: 'RateObject',
            component: () => import('./views/RateObject.vue')
        },
        {
            path: '/rate/staff/:id',
            name: 'RateStaff',
            component: () => import('./views/RateStaff.vue')
        },
        { path: "*",
            component: () => import('./views/PageNotFound.vue')
        }
    ]
})
