<template lang="html">
    <b-container fluid class="p-0">
        <b-container fluid class="px-3 nav1">
            <b-row>
                <b-col cols="4" offset="4" class="flex-center">
                    <router-link to="/"><h5 class="brand-name m-0">Ratemate</h5></router-link>
                </b-col>
                <b-col cols="4" class="flex-center">
                    <b-dropdown v-if="user" variant="div" right no-caret>
                        <template v-slot:button-content>
                            <span class="text-white">{{user.full_name}}</span>
                        </template>
                        <b-dropdown-item @click="goToAdmin">
                            Admin
                        </b-dropdown-item>
                        <b-dropdown-item @click="logout">
                            {{$t('logout')}}
                        </b-dropdown-item>
                    </b-dropdown>
                    <b-dropdown size="sm" :text="$i18n.locale"  class="lang-dropdown">
                        <b-dropdown-item v-for="lang in langs" :key="lang" @click="setLang(lang)">
                            {{ lang }}
                        </b-dropdown-item>
                    </b-dropdown>
                </b-col>
            </b-row>
        </b-container>
        <b-container fluid class="menu1 w-100 flex-center">
            <b-row class="w-100 flex-center">
                <b-col v-for="item in nav"
                       :key="item.title" cols="4" class="white text-center">
                    <router-link :to="item.href" class="menu-item">
                        {{ item.title }}
                    </router-link>
                </b-col>
            </b-row>
        </b-container>
    </b-container>
</template>

<script>
    export default {
        data() {
            return {
                langs: ['hr', 'en'],
                items: {
                    admin: [
                        {
                            title: this.$i18n.tc('user', 2),
                            href: '/admin'
                        },
                        {
                            title: this.$i18n.tc('unit', 2),
                            href: '/admin/units'
                        },
                        {
                            title: this.$i18n.tc('employee', 2),
                            href: '/admin/employees'
                        }
                    ],
                    owner: [
                        {
                            title: this.$i18n.t('dashboard'),
                            href: '/admin'
                        },
                        {
                            title: this.$i18n.tc('employee', 2),
                            href: '/admin/employees'
                        }
                    ],
                    guest: [
                        {
                            title: this.$i18n.tc('restaurant', 2),
                            href: '/restaurants'
                        },
                        {
                            title: this.$i18n.tc('caffe_bar', 2),
                            href: '/caffe-bars'
                        },
                        {
                            title: this.$i18n.tc('bar', 2),
                            href: '/bars'
                        }
                    ]
                }
            }
        },
        computed: {
            user() {
                return this.$store.getters.loggedUser;
            },
            nav() {
                if (this.user == null || !this.$parent.isAdmin) {
                    return this.items.guest;
                }
                switch (this.user.role_id) {
                    case 1:
                        return this.items.owner;
                    case 2:
                        return this.items.admin;
                    default:
                        return this.items.guest;
                }
            }
        },
        methods: {
            logout() {
                let self = this;
                konobarApi.post('logout').then(response => {
                    if (response.status === 200) {
                        self.$cookie.delete('auth_token');
                        self.$router.push({path: '/admin/login'});
                    }
                })
            },
            goToAdmin() {
                this.$router.push('/admin');
            },
            setLang(locale) {
                this.$i18n.locale = locale;
                this.$cookie.set('lang', locale);
                // Lang cookie
            }
        }
    }
</script>

<style lang="scss">
    .brand-name {
        font-family: 'Rubik', sans-serif;
    }
    .flex-center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .nav1 {
        padding: 15px 0;
        background-color: #3d35d0;
        h5 {
            color: #FFF;
            font-weight: 500;
        }
    }
    .menu-item {
        text-decoration: none;
        color: rgba(255, 255, 255, 0.5);
        font-size: .8rem;
    }
    .menu1 {
        background-color: #3d35d0;
        padding-bottom: 15px;
    }
    .white, .router-link-exact-active{
        color: #FFF;
    }

    .lang-dropdown {
        background: transparent;
        text-transform: uppercase !important;
        button {
            background: transparent;

            text-transform: uppercase !important;
        }
    }
</style>
