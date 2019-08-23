<template>
    <main id="app">
        <usernav v-if="$route.name != 'Place'"></usernav>
        <router-view class="main-content"/>
    </main>
</template>

<script>
export default {
  data () {
    return {

        }
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
</style>
