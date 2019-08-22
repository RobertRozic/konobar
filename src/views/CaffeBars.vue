<template>
  <div class="curved-wrap">
    <b-container fluid class="flex-center caffe-bars pt-5">
      Caffe Bars
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
        name: 'caffe-bars',
        data() {
            return {
                content: null
            }
        },
        created() {

        }
    }
</script>
