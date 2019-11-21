<template>
    <b-container data-aos="fade-right" data-aos-duration="700" fluid class="flex-center object unit"
        :style="item.images.length > 0 ? 'background-image: url(' + storage + item.images[0].path + ');' : ''">
        <div class="obj-details">
            <div class="mb-2">
                <h5 class="m-0">{{item.name}}</h5>
                <p class="m-0 grade"><i class="fas fa-star yellow"></i> {{item.average_rating}}</p>
            </div>
            <i class="fas fa-map-marker-alt"></i>&nbsp;<span class="location">{{item.address}}, {{item.township.name}} </span>
        </div>
    </b-container>
</template>

<script>
    export default {
        name: 'unit',
        props : {
            'item': {
                type: Object
            }
        },
        computed: {
            storage() {
                return api.storage;
            }
        },
    }
</script>

<style lang="scss" scoped>
    .unit {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
</style>