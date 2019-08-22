<template>
    <main id="app">
        <navbar :items="items"></navbar>
        <router-view class="main-content"/>
    </main>
</template>

<script>

    export default {
        data() {
            return {
                items: [
                    {
                        title: 'home',
                        href: '/'
                    },
                    {
                        title: 'programs',
                        href: '/programs',
                        subMenu: [
                            {
                                title: 'school',
                                href: '/programs/school',
                                icon: 'spark',
                                color: 'school'
                            },
                            {
                                title: 'research and development',
                                href: '/programs/rnd',
                                icon: 'spark',
                                color: 'blue'
                            },
                            {
                                title: 'marketing',
                                href: '/programs/marketing',
                                icon: 'spark',
                                color: 'purple'
                            },
                            {
                                title: 'bussiness',
                                href: '/programs/bussiness',
                                icon: 'spark',
                                color: 'red'
                            },
                            {
                                title: 'academy',
                                href: '/programs/academy',
                                icon: 'spark',
                                color: 'orange-light'
                            },
                            {
                                title: 'project',
                                href: '/programs/project',
                                icon: 'spark',
                                color: 'green'
                            },
                        ]
                    },
                    {
                        title: 'about',
                        href: '/about'
                    },
                    {
                        title: 'news',
                        href: '/news'
                    },
                    {
                        title: 'contact',
                        href: '/contact'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    @import "assets/styles/app";
</style>
