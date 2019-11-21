<template>
    <div v-if="user">
        <div v-if="user.role_id === 1" class="curved-wrap p-4 position-relative">
            <router-link v-for="item in employees" :to="$route.path + '/' + item.id" :key="item.full_name + item.id">
                <employee :item="item"></employee>
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
                        <h1 class="text-white">{{$tc('employee', 2)}}</h1>
                        <div class="w-25 flex-center">
                            <b-btn variant="primary"
                                   class="w-100"
                                   v-b-modal.new-employee>{{$t('new')}}</b-btn>
                        </div>
                    </b-col>
                    <b-col>
                        <konobar-table
                                position
                                :items="employees"
                                :fields="fields"
                                :search-keys="searchKeys"
                                @rowClicked="editEmployee"
                                class="white-bg">
                        </konobar-table>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <b-modal centered
                 hide-footer
                 ref="new-employee"
                 :title="$t('new_employee')"
                 id="new-employee">
            <konobar-form
                    :fields="formFields"
                    :submit="$t('create')"
                    post="employees"
                    @success="formSuccess">
            </konobar-form>
        </b-modal>
        <b-modal centered
                 hide-footer
                 ref="edit-employee"
                 :title="$t('edit_employee')"
                 id="edit-employee">
            <konobar-form
                    v-if="selectedEmployee"
                    :fields="formFields"
                    :submit="$t('update')"
                    :post="'employees' + '/' + selectedEmployee.id"
                    :item="selectedEmployee"
                    @success="formSuccess">
            </konobar-form>
        </b-modal>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selectedEmployee: null,
                employees: [],
                units: [],
                fields: [
                    {
                        label: this.$i18n.t('first_name'),
                        key: 'first_name',
                        sortable: true
                    },
                    {
                        label: this.$i18n.t('last_name'),
                        key: 'last_name',
                        sortable: true
                    },
                    {
                        label: this.$i18n.t('title'),
                        key: 'title',
                        sortable: true
                    },
                    {
                        label: this.$i18n.t('average_rating'),
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
                        label: this.$i18n.tc('unit', 1),
                        type: 'select',
                        required: true,
                        options: []
                    },
                    {
                        key: 'first_name',
                        label: this.$i18n.t('first_name'),
                        type: 'text',
                        required: true
                    },
                    {
                        key: 'last_name',
                        label: this.$i18n.t('last_name'),
                        type: 'text',
                        required: true
                    },
                    {
                        key: 'title',
                        label: this.$i18n.t('title'),
                        type: 'text',
                        required: true
                    },
                    {
                        key: 'images',
                        label: this.$i18n.t('images'),
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
                this.$refs['edit-employee'].hide();
            },
            editEmployee(id) {
                this.formFields[4].required = false;
                this.selectedEmployee = this.employees.find(employee => {return employee.id === id});
                this.$refs['edit-employee'].show();
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