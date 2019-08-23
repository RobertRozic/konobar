<template>
    <main id="app">
        <usernav></usernav>
        <router-view class="main-content"/>
    </main>
</template>

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
</style>
