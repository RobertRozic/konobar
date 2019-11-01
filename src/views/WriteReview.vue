<template>
    <div class="flat-wrap" v-if="employee || unit">
        <div class="obj-nav">
            <i @click="$router.go(-1)" class="fas fa-arrow-left"></i>
            <p class="m-0">Rate our
                <template v-if="employee">
                    employee
                </template>
                <template v-else-if="unit">
                    object
                </template>
            </p>
            <span></span>
        </div>
        <div class="rate-staff h-100 mt-4 flex-center">
            <template v-if="employee">
                <img :src="storage + employee.images[0].path" alt="Our employee" class="rate-img mb-4">
                <h5>{{employee.full_name}}</h5>
                <p class="job-title">{{employee.title}}</p>
            </template>
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
        name: 'write-review',
        data() {
            return {
                employee: null,
                unit: null,
                form: {
                    rating: 0,
                    message: ''
                }
            }
        },
        computed: {
            review() {
                return this.$store.getters.getReview;
            },
            storage() {
                return api.storage;
            }
        },
        methods: {
            submitReview() {
                this.form.employee_id = this.review.employee_id;
                this.form.unit_id = this.review.unit_id;
                this.form.email = this.review.email;
                this.form.code = this.review.code;
                konobarApi.post('reviews', this.form).then( response => {

                    if (response.status === 201) {
                        this.$router.push({name: 'Thanks'});
                    }
                });
            },
            getInfo() {
                if (this.review.employee_id) {
                    konobarApi.get('employees/' + this.review.employee_id).then(response => {
                        if (response.status === 200) {
                            this.employee = response.data;
                        }
                    });
                } else if (this.review.unit_id) {
                    konobarApi.get('units/' + this.review.unit_id).then(response => {
                        if (response.status === 200) {
                            this.unit = response.data;
                        }
                    });
                }
            }
        },
        watch: {
            'review': {
                handler (newVal) {
                    if (newVal) {
                        this.getInfo();
                    }
                },
                immediate: true
            }
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
