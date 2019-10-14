<template>
    <div class="flat-wrap" v-if="employee">
        <div class="obj-nav">
            <i @click="$router.go(-1)" class="fas fa-arrow-left"></i>
            <p class="m-0">Rate our employee</p>
            <span></span>
        </div>
        <div class="rate-staff h-100 mt-4 flex-center">
            <img v-if="employee.images.length > 0" :src="storage + employee.images[0].path" alt="Our employee" class="rate-img mb-4">
            <h5>{{employee.full_name}}</h5>
            <p class="job-title">{{employee.title}}</p>
            <p class="mt-4 mb-0">How was your experience?</p>
            <div class="stars my-3 w-100 text-center">
                <i v-for="i in 5"
                   @click="form.rating = i"
                   class="fas fa-star fa-2x px-2"
                   :class="i <= form.rating ? 'yellow' : 'gray'"></i>
            </div>
            <div class="staff-review-wrap mt-4 w-100 p-3">
                <b-form v-on:submit.prevent="submitReview">
                    <textarea name="message" v-model="form.message" rows="8" class="obj-review mb-4" placeholder="Write a review..."></textarea>
                    <b-btn type="submit" class="btn btn-warning continue-btn">Submit</b-btn>
                </b-form>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'rate-staff',
        data() {
            return {
                employee: null,
                form: {
                    message: '',
                    rating: 0,
                    email: ''
                }
            }
        },
        computed: {
            storage() {
                return api.storage;
            }
        },
        methods: {
            submitReview() {
                this.form.employee_id = this.$route.params.id;
                konobarApi.post('reviews', this.form).then( response => {
                    if (response.status === 201) {
                        this.$router.push({name: 'Thanks'});
                    }
                });
            }
        },
        created() {
            konobarApi.get('employees/' + this.$route.params.id).then(response => {
                if (response.status === 200) {
                    this.employee = response.data;
                }
            });
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
