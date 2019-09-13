<template>
    <main id="app">
        <!--<usernav v-if="!['Place', 'RateObject', 'RateStaff'].includes($route.name) && !isAdmin"></usernav>-->
        <navbar v-if="!isAuth" :items="nav"></navbar>
        <router-view class="main-content"/>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                nav: {
                    admin: [
                        {
                            title: 'users',
                            href: '/admin/users'
                        },
                        {
                            title: 'units',
                            href: '/admin/units'
                        },
                        {
                            title: 'employees',
                            href: '/admin/employees'
                        }
                    ],
                    owner: [
                        {
                            title: 'dashboard',
                            href: '/admin'
                        },
                        {
                            title: 'employees',
                            href: '/admin/employees'
                        }
                    ],
                    guest: [
                        {
                            title: 'Restaurants',
                            href: '/restaurants'
                        },
                        {
                            title: 'Caffe Bars',
                            href: '/caffe-bars'
                        },
                        {
                            title: 'Bars',
                            href: '/bars'
                        }
                    ]
                }
            }
        },
        computed: {
            isAuth () {
                return this.$route.path.match('login');
            },
            isAdmin () {
                return this.$route.path.match('admin');
            }
        },
        mounted() {

        },
        created() {
            let self = this;
            konobarApi.interceptors.request.use(
                (config) => {
                    let token = this.$cookie.get('auth_token');
                    if (token) {
                        config.headers['Authorization'] = 'Bearer ' + token;
                    }
                    return config
                },
                (error) => {
                    return Promise.reject(error);
                }
            );
            konobarApi.interceptors.response.use(
                function (response) {
                    return response;
                },
                function (error) {
                    if (error.response.status === 401) {
                        self.$cookie.delete('auth_token');
                        self.$router.push('/admin/login');
                    }
                    console.log("An error ocurred -> " + error);
                    return Promise.reject(error);
                }
            );
        },
        watch: {
            isAdmin: function (newVal) {
                if (newVal.length > 0)
                    this.$store.dispatch('getUser');
            }
        }
    }
</script>

<style lang="scss">
    @import "assets/styles/app";

    .bg-blue {
        background-color: #3d35d0;
        color: #FFF
    }

    .bg-white {
        background-color: #3d35d0;
        color: #32323C;
    }

    .curved-wrap {
        border-radius: 15px 15px 0 0;
        padding: 15px 15px 15px 15px;
    }

    .fa-arrow-left {
        cursor: pointer;
    }
</style>
