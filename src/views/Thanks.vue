<template>
    <div class="full flex-center">
        <img src="../assets/images/thanks.png" alt="Thank you!">
        <h5 class="mt-2">${{$t('thank_you')}}</h5>
        <p class="mb-5">${{$t('thank_you_2')}}</p>
        <router-link :to="'/'" class="btn btn-warning">{{$t('home')}}</router-link>
    </div>
</template>

<script>
    export default {
        name: 'thanks',
    }
</script>
