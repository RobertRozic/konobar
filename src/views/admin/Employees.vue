<template>
    <div v-if="user">
        <div v-if="user.role_id === 1" class="curved-wrap p-4 position-relative">
            <router-link v-for="item in employees" :to="$route.path + '/' + item.id" :key="item.full_name">
                <employee  :item="item"></employee>
            </router-link>
            <b-btn variant="primary"
                   class="add-fab"
                   v-b-modal.new-employee>
                <i class="fas fa-plus"></i>
            </b-btn>
        </div>
        <div v-else-if="user.role_id = 2">
            <b-container>
                <b-row>
                    <b-col cols="12" class="p-2 d-flex justify-content-between">
                        <h1 class="text-white">Employees</h1>
                        <div class="w-25 flex-center">
                            <b-btn variant="primary"
                                   class="w-100"
                                   v-b-modal.new-employee>New</b-btn>
                        </div>
                    </b-col>
                    <b-col>
                        <konobar-table
                                position
                                :items="employees"
                                :fields="fields"
                                :search-keys="searchKeys"
                                class="white-bg">
                        </konobar-table>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <b-modal centered
                 hide-footer
                 ref="new-employee"
                 title="New employee"
                 id="new-employee">
            <konobar-form
                    :fields="formFields"
                    submit="Create"
                    post="employees"
                    @success="formSuccess">
            </konobar-form>
        </b-modal>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                employees: [],
                units: [],
                fields: [
                    {
                        key: 'first_name',
                        sortable: true
                    },
                    {
                        key: 'last_name',
                        sortable: true
                    },
                    {
                        key: 'title',
                        sortable: true
                    },
                    {
                        key: 'average_rating',
                        sortable: true
                    }
                ],
                searchKeys: [
                    'first_name',
                    'last_name',
                    'title'
                ],
                formFields: [
                    {
                        key: 'unit_id',
                        label: 'Unit',
                        type: 'select',
                        required: true,
                        options: []
                    },
                    {
                        key: 'first_name',
                        label: 'First name',
                        type: 'text',
                        required: true
                    },
                    {
                        key: 'last_name',
                        label: 'Last name',
                        type: 'text',
                        required: true
                    },
                    {
                        key: 'title',
                        label: 'Title',
                        type: 'text',
                        required: true
                    },
                    {
                        key: 'images',
                        label: 'Images',
                        type: 'file',
                        multiple: true,
                        required: true
                    },

                ]
            }
        },
        computed: {
            user() {
                return this.$store.getters.loggedUser;
            }
        },
        methods: {
            getEmployees() {
                konobarApi.get('employees').then(response => {
                        this.employees = response.data;
                    }
                );
            },
            formSuccess() {
                this.getEmployees();
                this.$refs['new-employee'].hide();
            }
        },
        created() {
            this.getEmployees();
            konobarApi.get('units').then(response => {
                    this.units = response.data;
                    this.units.forEach(unit => {
                        this.formFields[0].options.push(
                            {
                                text: unit.name,
                                value: unit.id
                            }
                        )
                    });
                }
            );
        }
    }
</script>

<style lang="scss">
    .add-fab {
        position: fixed;
        right: 24px;
        bottom: 24px;
        z-index: 9999;
        border-radius: 100%;
        width: 50px;
        height: 50px;
    }
</style>