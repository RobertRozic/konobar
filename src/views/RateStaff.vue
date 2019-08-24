<template>
  <div class="flat-wrap">
    <div class="obj-nav">
      <i @click="$router.go(-1)" class="fas fa-arrow-left"></i>
      <p class="m-0">Rate our employee</p>
      <span></span>
    </div>
    <div class="rate-staff h-100 mt-4 flex-center">
      <img src="../assets/images/face.png" alt="Our employee" class="rate-img mb-4">
      <h5>Employee name</h5>
      <p class="job-title">job title</p>
      <p class="mt-4 mb-0">How was your experience?</p>
      <div class="stars my-3 w-100 text-center">
        <i class="fas fa-2x fa-star gray px-2"></i>
        <i class="fas fa-2x fa-star gray px-2"></i>
        <i class="fas fa-2x fa-star gray px-2"></i>
        <i class="fas fa-2x fa-star gray px-2"></i>
        <i class="fas fa-2x fa-star gray px-2"></i>
      </div>
      <div class="staff-review-wrap mt-4 w-100 p-3">
        <textarea name="review" rows="5" class="obj-review mb-4 w-100" placeholder="Write a review..."></textarea>
        <router-link :to="{ name: 'Thanks' }" class="btn btn-warning continue-btn">Submit</router-link>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: 'RateStaff',
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
  .staff-review-wrap {
    flex-grow: 1;
    background-color: #3d35d0;
    border-radius: 15px 15px 0 0;
  }
  .rate-staff {
    flex-direction: column;
    display: flex;
    min-height: calc(100vh - 85px);
    flex-flow: column;
    height: 100%;
    h5 {
      font-weight: 600;
    }
    .job-title {
      color: rgba(0, 0, 0, 0.5);
    }
  }
  .rate-img {
    width: 130px;
    height: 130px;
    object-fit: cover;
    border-radius: 50%;
  }
</style>
