<template>
    <main id="app">
        <usernav v-if="!['Place', 'RateObject', 'RateStaff'].includes($route.name) && !isAdmin"></usernav>
        <admin-nav v-if="isAdmin && !isAuth" :items="nav"></admin-nav>
        <router-view class="main-content p-2"/>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                nav: [
                    {
                        title: 'home',
                        href: '/admin'
                    },
                    {
                        title: 'users',
                        admin: true,
                        href: '/admin/users'
                    },
                    {
                        title: 'units',
                        href: '/admin/units'
                    },
                    {
                        title: 'employees',
                        href: '/admin/employees'
                    },
                ]
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
        mounted() {
            this.$store.dispatch('getUser');
        }
    }
</script>

<style lang="scss">
    @import "assets/styles/app";

    body {
        background-color: #3d35d0;
    }
    .curved-wrap {
        background-color: #FFF;
        border-radius: 15px 15px 0 0;
        padding: 15px 15px 15px 15px;
        //overflow-y: scroll;
    }
    .fa-arrow-left {
        cursor: pointer;
    }
</style>
