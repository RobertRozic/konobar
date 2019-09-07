<template>
    <b-container data-aos="fade-right" data-aos-duration="700" fluid class="flex-center object caffe-bar">
        <div class="obj-details">
            <div class="mb-2">
                <h5 class="m-0">{{item.name}}</h5>
                <p class="m-0 grade"><i class="fas fa-star"></i> {{item.average_rating}}</p>
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
    }
</script>

<style lang="scss" scoped>
    //HERE BECAUSE VUE TAKES A SHIT WITH BACKGROUND IMAGE LINKS
    /// Fix this
    .caffe-bar {
        background-image: url('../assets/images/bars.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
</style>