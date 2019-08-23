<template>
  <div class="full flex-center">
    <img src="../assets/images/thanks.png" alt="Thank you!">
    <h5 class="mt-2">Thank you for rating!</h5>
    <p class="mb-5">We will do everything we can to improve our services.</p>
    <router-link :to="'/'" class="btn btn-warning">Home</router-link>
  </div>
</template>

<script>
    export default {
        name: 'thanks',
        data() {
            return {
                content: null
            }
        },
        created() {

        }
    }
</script>

<style lang="scss">
  .full {
    width: 100vw;
    flex-direction: column;
    position: absolute;
    z-index: 999;
    top: 0;
    background-color: #3d35d0;
    img {
      max-height: 250px;
    }
    h5 {
      font-weight: 600;
      color: #FFF;
    }
    p {
      text-align: center;
      color: #FFF;
      font-size: 12px;
      font-weight: 100;
    }
    a {
      background-color: #e7b949!important;
      border-radius: 7px !important;
      color: #FFF !important;
      width: 250px;
    }
  }
</style>
