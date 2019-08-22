<template>
  <div class="curved-wrap">
    <b-container fluid class="flex-center restaurants pt-5">
      Restaurants
    </b-container>
  </div>
</template>

<style lang="scss" scoped>
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
<script>
    export default {
        name: 'restaurants',
        data() {
            return {
                content: null
            }
        },
        created() {

        }
    }
</script>
