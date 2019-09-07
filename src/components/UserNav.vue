<template lang="html">
    <b-container fluid class="p-0">
        <b-container fluid class="flex-center nav1">
            <h5 class="brand-name">ratemate</h5>
        </b-container>
        <b-container fluid class="menu1 w-100 flex-center">
            <b-row class="w-100 flex-center">
                <b-col v-for="item in navItems" :key="item.title" cols="4" class="white text-center">
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
        name: 'usernav',
        data() {
            return {
                navItems: [
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
    }
</script>

<style lang="scss" scoped>
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
    .white, .active{
        color: #FFF;
    }
</style>
