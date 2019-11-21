<template>
    <div class="curved-wrap">
        <router-link v-for="item in bars" :key="item.id" :to="{name: 'Place', params: {id: item.id}}">
            <unit :item="item"></unit>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'bars',
        data() {
            return {
                bars: null
            }
        },
        created() {
            // Bars, Restaurants, Caffe Bars to same component
            konobarApi.get('units', {
                params: {
                    type: 3
                }
            }).then(response => {
                if (response.status === 200) {
                    this.bars = response.data;
                }
            });
        }
    }
</script>

