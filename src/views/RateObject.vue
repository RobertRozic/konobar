<template>
    <div class="flat-wrap">
        <div class="obj-nav">
            <i @click="$router.go(-1)"  class="fas fa-arrow-left"></i>
            <p class="m-0">How was your experience?</p>
            <span></span>
        </div>
        <div class="review-wrap px-3">
            <div class="stars my-5 w-100 text-center">
                <i v-for="i in 5"
                   @click="form.rating = i"
                   class="fas fa-star fa-2x px-2"
                   :class="i <= form.rating ? 'yellow' : 'gray'"></i>
            </div>
            <b-form v-on:submit.prevent="submitReview">
                <textarea name="message" v-model="form.message" rows="8" class="obj-review mb-4" placeholder="Write a review..."></textarea>
                <b-btn type="submit" class="btn btn-warning continue-btn">Submit</b-btn>
            </b-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RateObject',
        data() {
            return {
                form: {
                    message: '',
                    rating: 0,
                    email: 'r.rozic97@gmail.com'
                }
            }
        },
        methods: {
            submitReview() {
                this.form.unit_id = this.$route.params.id;
                konobarApi.post('reviews', this.form).then( response => {
                    if (response.status === 201) {
                        this.$router.push({name: 'Thanks'});
                    }
                });
            }
        },
        created() {
        }
    }
</script>

<style lang="scss">
    .stars {
        &:hover {
            cursor: pointer;
            i {
                color: #f5a623;
            }
        }
        i:hover~i {
            cursor: pointer;
            color: #c8c8c8;
        }
    }
</style>