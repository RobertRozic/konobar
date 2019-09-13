<template>
    <div v-if="item" class="bg-white rounded p-4" >
        <div class="d-flex">
            <div class="d-flex rating-wrapper px-2 py-1">
                <i class="fas fa-star flex-center mr-2 mb-1 yellow"></i>
                <span class="yellow">{{item.rating}}</span>
            </div>
            <div class="ml-4 flex-center">
                {{item.created_at}}
            </div>
        </div>
        <div class="mt-2">
            {{item.message}}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'custom-review',
        props: {
            'item': {
                type: Object
            }
        },
    }
</script>

<style>
    .rating-wrapper {
        background-color: rgba(245, 166, 35, 0.2);
        border: .5px solid #f5a623;
        border-radius: 10px;
    }
</style>