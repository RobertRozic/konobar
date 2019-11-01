export default [
    {
        path: '/admin',
        name: 'Admin',
        component: () => import('./Home.vue')
    },
/*    {
        path: '/admin/users',
        name: 'Users',
        component: () => import('./Users.vue')
    },*/
    {
        path: '/admin/employees',
        name: 'MyEmployees',
        component: () => import('./Employees.vue')
    },
    {
        path: '/admin/my-employees/:id',
        name: 'MyEmployee',
        component: () => import('./MyEmployee.vue')
    },
    {
        path: '/admin/units',
        name: 'Units',
        component: () => import('./Units.vue')
    },
    {
        path: '/admin/my-units/:id',
        name: 'MyUnit',
        component: () => import('./MyUnit.vue')
    },
    {
        path: '/admin/login',
        name: 'Login',
        component: () => import('./Login.vue')
    },
];