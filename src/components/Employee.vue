<template>
    <b-container v-if="item" data-aos="fade" data-aos-duration="700" fluid class="staff-member w-100 py-3 my-3">
        <img v-if="item.images.length > 0" :src="storage + item.images[0].path" alt="Staff photo" class="staff-photo">
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
            },
            storage() {
                return api.storage;
            }
        },
    }
</script>

<style lang="scss">
    .staffLink {
        text-decoration: none!important;
    }
    .staff-photo {
        max-height: 50px;
        max-width: 50px;
        object-fit: cover;
        border-radius: 50%;
    }
    .staff-details {
        flex-direction: column;
        h5 {
            font-weight: 600;
            color: #434343;
        }
        p {
            font-size: 12px;
            color: rgba(0, 0, 0, 0.5);
        }
    }
    .staff-member {
        border-radius: 10px;
        -webkit-box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
        -moz-box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
        box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
        display: flex;
        justify-content: space-between;
    }
</style>