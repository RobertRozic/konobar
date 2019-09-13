<template>
    <div class="curved-wrap p-4">
        <h5 class="font-weight-bold" v-if="user">Hi {{user.first_name}},</h5>
        <h6>let's check what is new today</h6>
        <router-link v-for="unit in units"
                     :to="'admin/my-units/' + unit.id"
                     class="border-top-grey"
                     v-if="units.length > 0">
            <unit-details  :unit="unit" :key="unit.id"></unit-details>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'dashboard',
        data() {
            return {
                units: [],
            }
        },
        computed: {
            user() {
                return this.$store.getters.loggedUser;
            }
        },
        methods: {
            getUnits() {
                konobarApi.get('units').then(response => {
                        this.units = response.data;
                    }
                );
            }
        },
        created() {
            this.getUnits();
        }
    }
</script>