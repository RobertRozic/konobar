<template>
    <div v-if="unit">
        <div class="curved-wrap">
            <div class="obj-nav flex-center">
                <i @click="$router.go(-1)" class="fas fa-arrow-left"></i>
                <p class="m-0">Overview</p>
                <span></span>
            </div>
            <div class="flex-center flex-column">
                <unit-details :unit="unit" :key="unit.id" class="w-100"></unit-details>
            </div>
        </div>
        <div class="curved-wrap bg-blue flex-grow-1 p-3">
            <h6 class="font-weight-bold">Comments and ratings.</h6>
            <div>Read all comments from this month.</div>
            <review v-for="review in unit.reviews"
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
                unit: null
            }
        },
        created() {
            konobarApi.get('units/' + this.$route.params.id).then(response => {
                    if (response.status === 200) {
                        this.unit = response.data;
                    }
                }
            )
        }
    }
</script>