<template>
    <b-container fluid class="not-found">
      <h2>404</h2>
      <p class="mb-5">Page not found.</p>
      <router-link :to="'/'" class="btn btn-warning">Home</router-link>
    </b-container>
</template>

<style lang="scss" scoped>
    .not-found {
      height: calc(100vh - 101px);
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
