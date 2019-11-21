<template>
    <div class="curved-wrap">
        <router-link v-for="item in caffes" :key="item.id" :to="{name: 'Place', params: {id: item.id}}">
            <unit :item="item"></unit>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'caffe-bars',
        data() {
            return {
                caffes: null
            }
        },
        created() {
            // Bars, Restaurants, Caffe Bars to same component
            konobarApi.get('units', {
                params: {
                    type: 2
                }
            }).then(response => {
                if (response.status === 200) {
                    this.caffes = response.data;
                }
            });
        }
    }
</script>
