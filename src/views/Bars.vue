<template>
  <div class="curved-wrap">
    <b-container fluid class="flex-center bars pt-5">
      Bars
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
        name: 'bars',
        data() {
            return {
                content: null
            }
        },
        created() {

        }
    }
</script>
