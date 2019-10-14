<template>
    <div v-if="employee">
        <div class="curved-wrap">
            <div class="obj-nav flex-center">
                <i @click="$router.go(-1)" class="fas fa-arrow-left"></i>
                <p class="m-0">Overview</p>
                <span></span>
            </div>
            <div class="flex-center flex-column">
                <div v-if="employee.images.length > 0">
                    <b-img :src="storage + employee.images[0].path" alt="Staff photo" class="staff-photo"></b-img>
                </div>
                <h5 class="mt-4 mb-1 font-weight-bold">{{employee.full_name}}</h5>
                <h6 class="gray">{{employee.title}}</h6>

                <div class="gray mt-3"><span class="yellow">{{employee.average_rating}}</span> ({{employee.review_count }} reviews)</div>
                <div class="stars mt-1">
                    <i v-for="i in Math.floor(employee.average_rating)" class="fas fa-star yellow mr-2"></i>
                    <i v-for="i in (5 - Math.floor(employee.average_rating))"class="fas fa-star gray mr-2"></i>
                </div>
            </div>
        </div>
        <div class="curved-wrap bg-blue flex-grow-1 p-3">
            <h6 class="font-weight-bold">Comments and ratings.</h6>
            <div>Read all comments from this month.</div>
            <review v-for="review in employee.reviews"
                    :key="review.id"
                    :item="review"
                    class="my-3">
            </review>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                employee: null
            }
        },
        computed: {
            storage() {
                return api.storage;
            }
        },
        created() {
            konobarApi.get('employees/' + this.$route.params.id).then(response => {
                    if (response.status == 200) {
                        this.employee = response.data;
                    }
                }
            )
        }
    }
</script>