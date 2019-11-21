<template>
    <div class="full flex-center">
        <template v-if="!loading">
            <template v-if="verified">
                <img src="../assets/images/thanks.png" alt="Thank you!">
                <h5 class="mt-2">{{$t('thank_verify')}}</h5>
                <p class="mb-5">{{$t('thank_you_2')}}</p>
            </template>
            <template v-else>
                <h5 class="mt-2">{{$t('something_wrong')}}</h5>
            </template>
        </template>
        <router-link :to="'/'" class="btn btn-warning">{{$t('home')}}</router-link>
    </div>
</template>

<script>
    export default {
        name: 'verify',
        data() {
            return {
                verified: false,
                loading: true
            }
        },
        created() {
            let formData = {
                token: this.$route.params.token
            };
            konobarApi.post('reviews/verify', formData).then(response => {
                this.loading = false;
                if (response.status === 200) {
                    this.verified = true;
                }
            });
        }
    }
</script>
