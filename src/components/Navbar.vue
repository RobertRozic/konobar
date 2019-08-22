<template>
    <b-container>
        <b-navbar id="spark-navbar" class="px-0" toggleable="lg">
            <b-navbar-brand href="#">
                <a href="/">
                    <b-img fluid :src="require('@/assets/logo.png')"></b-img>
                </a>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

                <b-navbar-nav class="ml-auto">

                    <template v-for="item in items">
                        <b-nav-item-dropdown v-if="item.subMenu" :text="item.title" left :key="item.title">
                            <li v-for="(subitem, index) in item.subMenu" :key="subitem.title" class="dropdown-item" :class="{'border-top-grey': index !== 0 }">
                                <a class="nav-link py-3"  :href="subitem.href" :class="'hover-spark-' + subitem.color">
                                    <!--<font-awesome-icon icon="square" class="mr-4"></font-awesome-icon>-->
                                    {{subitem.title}}
                                </a>
                            </li>
                        </b-nav-item-dropdown>

                        <li v-else :key="item.title"  class="nav-item">
                            <a class="nav-link" :href="item.href">
                                <!--<font-awesome-icon :icon="['fas', 'caret-right']" class="d-none"/>-->
                                {{item.title}}
                            </a>
                        </li>
                    </template>

                    <b-nav-item-dropdown v-if="user" :text="user.name" left :key="user.username">
                        <li class="dropdown-item border-top-grey">
                            <div class="nav-link py-3" @click="logout">
                                <!--<font-awesome-icon icon="exit" class="mr-4"></font-awesome-icon>-->
                                Odjava
                            </div>
                        </li>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
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
                this.$axios.post('logout').then(response => {
                    if (response.status === 200) {
                        self.$cookies.remove('api_token');
                        self.$router.push({path: '/admin/login'});
                    }
                })
            }
        }
    }
</script>

<style lang="scss">
    #spark-navbar {
        min-height: 120px;
    }

    .nav-item {
        text-transform: uppercase;
        a, span {
            color: $dark-grey !important;
            font-weight: 800;
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
            &.nuxt-link-exact-active {
                cursor: pointer;
                > span {
                    text-decoration: none;
                    color: $spark-orange-dark !important;
                }
                text-decoration: none;
                color: $spark-orange-dark !important;
            }
            &.nuxt-link-exact-active {
                svg {
                    display: inline !important;
                }
            }
        }
    }

    @media (min-width: 992px) {
        .nav-item {
            + .nav-item {
                margin-left: 44px;
            }
        }
    }

    .dropdown-item {
        &:active, &.active {
            background: none;
        }
    }

    .dropdown-menu {
        padding: 0;
        border-radius: 10px;
        box-shadow: 0 40px 40px 0 rgba(0, 0, 0, 0.1);
    }
</style>
