<template>
    <div v-if="unit" class="py-3">
        <div class="obj-inner-wrap">
            <div class="obj-identity">
                <h4 class="mb-1">{{unit.name}}</h4>
                <p class="mb-2">{{unit.address}}, {{unit.township.name}}</p>
            </div>
            <div class="obj-grade">
                <div class="grade-num flex-center">
                    <h5 class="mb-0 text-center yellow">{{unit.average_rating}}</h5>
                </div>
            </div>
        </div>
        <div class="star-wrap">
            <div class="stars">
                <i v-for="i in Math.floor(unit.average_rating)" class="fas fa-star yellow"></i>
                <i v-for="i in (5 - Math.floor(unit.average_rating))"class="fas fa-star gray"></i>
            </div>
            <p class="review-num m-0">{{unit.review_count}} reviews</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            unit: {
                type: Object,
                default: null
            }
        }
    }
</script>

<style lang="scss">
    .unit-details {
        color: #32323C;
        &:hover {
            text-decoration: none;
        }
    }
    .obj-inner-wrap {
        display: flex;
        justify-content: space-between;
    }
    .obj-identity {
        display: flex;
        flex-direction: column;
        h4 {
            font-weight: 600;
        }
        p {
            color: rgba(0, 0, 0, 0.5)
        }
    }
    .obj-grade {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    .grade-num {
        height: 50px;
        width: 50px;
        border-radius: 10px;
        background-color: rgba(245, 166, 35, 0.2);
        border: .5px solid #f5a623;
        margin-bottom: 5px;
    }
    .review-num {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.5);
    }
    .star-wrap {
        display: flex;
        justify-content: space-between;
    }
</style>