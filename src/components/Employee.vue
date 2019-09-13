<template>
    <b-container v-if="item" data-aos="fade" data-aos-duration="700" fluid class="staff-member w-100 py-3 my-3">
        <img src="../assets/images/face.png" alt="Staff photo" class="staff-photo">
        <div class="staff-details w-100  ml-3 flex-center">
            <p class="m-0 w-100 text-left">{{item.title}}</p>
            <h5 class="w-100 text-left">{{item.full_name}}</h5>
        </div>
        <i class="fas fa-star flex-center mr-2" :class="user ? 'yellow ': 'gray'">
        </i>
        <span v-if="user" class="flex-center font-weight-bold yellow mt-1">{{item.average_rating}}</span>
    </b-container>
</template>

<script>
    export default {
        props: {
            'item': {
                type: Object
            }
        },
        computed: {
            user() {
                return this.$store.getters.loggedUser;
            }
        },
    }
</script>