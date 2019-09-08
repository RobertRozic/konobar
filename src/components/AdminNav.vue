<template>
    <b-container fluid id="konobar-nav-wrapper">
        <b-container>
            <b-navbar id="konobar-nav" class="px-0" toggleable="lg" v-if="user">
                <b-navbar-brand href="#">
                    <span>RATEMATE</span>
                    <!--<b-img fluid src="/"></b-img>-->
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>

                    <b-navbar-nav class="ml-auto">

                        <template v-for="item in items">
                            <b-nav-item-dropdown v-if="item.subMenu" :text="item.title" left :key="item.title">
                                <li v-for="(subitem, index) in item.subMenu" :key="subitem.title" class="dropdown-item" :class="{'border-top-grey': index !== 0 }">
                                    <router-link class="nav-link py-3" :to="subitem.href">
                                        {{subitem.title}}
                                    </router-link>
                                </li>
                            </b-nav-item-dropdown>

                            <li v-else-if="item.admin ? (user.role_id === 1) : true" :key="item.title" class="nav-item">
                                <router-link class="nav-link" :to="item.href">
                                    {{item.title}}
                                </router-link>
                            </li>
                        </template>

                        <b-nav-item-dropdown v-if="user" :text="user.full_name" right >
                            <li class="dropdown-item border-top-grey">
                                <div class="nav-link py-3" @click="logout">
                                    Odjava
                                </div>
                            </li>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </b-container>
    </b-container>
</template>

<script>
    export default {
        props: {
            items: {
                type: Array
            }
        },
        computed: {
            user() {
                return this.$store.getters.loggedUser;
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
            }
        }
    }
</script>

<style lang="scss">
    #konobar-nav-wrapper {
        background: white;
    }

    #konobar-nav {
        min-height: 80px;
    }

    .nav-item {
        text-transform: uppercase;
        a, span {
            color: #333 !important;
            font-weight: 900;
            letter-spacing: 3px;
            font-size: 12px;
        }
        .dropdown-item:hover {
            cursor: pointer;
        }
        > .nav-link {
            > span {
                transition: .3s;
            }
            &:hover, &:active,
            &.link-exact-active {
                cursor: pointer;

                > span {
                    text-decoration: none;
                    color: blue !important;
                }

                text-decoration: none;
                color: blue !important;
            }
        }
    }

    @media (min-width: 992px) {
        #konobar-nav {
            .nav-item {
                + .nav-item {
                    margin-left: 44px;
                }
            }
        }
    }

    .dropdown-item {
        &:active, &.active {
            background: none;
        }
    }

    .dropdown-menu {
        overflow: hidden;
        padding: 0;
        border-radius: 10px;
        box-shadow: 0 40px 40px 0 rgba(0, 0, 0, 0.1);
    }
</style>