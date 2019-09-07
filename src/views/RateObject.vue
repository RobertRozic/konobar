<template>
  <div class="flat-wrap">
    <div class="obj-nav">
      <i @click="$router.go(-1)"  class="fas fa-arrow-left"></i>
      <p class="m-0">How was your experience?</p>
      <span></span>
    </div>
    <div class="review-wrap px-3">
      <div class="stars my-5 w-100 text-center">
        <i class="fas fa-star gray fa-2x px-2"></i>
        <i class="fas fa-star gray fa-2x px-2"></i>
        <i class="fas fa-star gray fa-2x px-2"></i>
        <i class="fas fa-star gray fa-2x px-2"></i>
        <i class="fas fa-star gray fa-2x px-2"></i>
      </div>
      <textarea name="review" rows="8" class="obj-review mb-4" placeholder="Write a review..."></textarea>
      <router-link :to="{ name: 'Thanks' }" class="btn btn-warning continue-btn">Submit</router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'RateObject',
        data() {
            return {
                content: null
            }
        },
        created() {
        }
    }
</script>
