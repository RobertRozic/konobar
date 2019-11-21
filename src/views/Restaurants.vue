<template>
    <div class="curved-wrap">
        <router-link v-for="item in restaurants" :key="item.id" :to="{name: 'Place', params: {id: item.id}}">
            <unit :item="item"></unit>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'restaurants',
        data() {
            return {
                restaurants: null
            }
        },
        created() {
            // Bars, Restaurants, Caffe Bars to same component
            konobarApi.get('units', {
                params: {
                    type: 1
                }
            }).then(response => {
                if (response.status === 200) {
                    this.restaurants = response.data;
                }
            });
        }
    }
</script>
