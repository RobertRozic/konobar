<template>
  <div class="full flex-center">
    <img src="../assets/images/thanks.png" alt="Thank you!">
    <h5 class="mt-2">Thank you! Please check your email to confirm you review!</h5>
    <p class="mb-5">We will do everything we can to improve our services.</p>
    <router-link :to="'/'" class="btn btn-warning">Home</router-link>
  </div>
</template>

<script>
  export default {
    name: 'thanks',
  }
</script>
