<template>
    <main id="app">
        <!--<usernav v-if="!['Place', 'RateObject', 'RateStaff'].includes($route.name) && !isAdmin"></usernav>-->
        <navbar v-if="!isAuth"></navbar>
        <router-view class="main-content"/>
    </main>
</template>

<script>
    export default {
        computed: {
            isAuth () {
                return this.$route.path.match('login');
            },
            isAdmin () {
                return this.$route.path.match('admin');
            }
        },
        created() {
            // Set previous lang
            let locale = this.$cookie.get('lang');
            if (locale != null)
                this.$i18n.locale = locale;

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
