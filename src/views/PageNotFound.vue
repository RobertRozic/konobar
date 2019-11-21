<template>
    <b-container fluid class="not-found">
        <h2>404</h2>
        <p class="mb-5">{{$t('not_found')}}</p>
        <router-link :to="'/'" class="btn btn-warning">{{$t('home')}}</router-link>
    </b-container>
</template>

<style lang="scss" scoped>
    .not-found {
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        top: 0;
        background-color: #3d35d0;
        align-items: center;
        h2 {
            color: #FFF;
            font-weight: 600;
        }
        p, a {
            color: #FFF !important;
        }
    }
</style>
