<template>
    <b-container v-if="user"  class="curved-wrap p-4">
        <b-row v-if="user.role_id === 1" class="flex-column">
            <h5 class="font-weight-bold" >{{$t('hello')}} {{user.first_name}},</h5>
            <h6>{{$t('what_is_new')}}</h6>
            <router-link v-for="unit in units"
                         :key="unit.name"
                         :to="'admin/my-units/' + unit.id"
                         class="border-top-grey"
                         v-if="units.length > 0">
                <unit-details :unit="unit"></unit-details>
            </router-link>
        </b-row>
        <b-row v-else-if="user.role_id === 2">
            <b-col cols="12" class="p-2 d-flex justify-content-between">
                <h1 class="text-white">{{$tc('user', 2)}}</h1>
                <div class="w-25 flex-center">
                    <b-btn variant="primary"
                           class="w-100"
                           v-b-modal.new-user>{{$t('new')}}</b-btn>
                </div>
            </b-col>
            <b-col>
                <konobar-table
                        position
                        :items="users"
                        :fields="fields"
                        :search-keys="searchKeys"
                        @rowClicked="editUser"
                        class="white-bg">
                </konobar-table>
            </b-col>
            <b-modal centered
                     ref="new-user"
                     title="New user"
                     id="new-user">
                <konobar-form :fields="formFields"
                              :submit="$t('create')"
                              post="register"
                              @success="formSuccess">
                </konobar-form>
            </b-modal>
            <b-modal centered
                     hide-footer
                     ref="edit-user"
                     title="Edit user"
                     id="edit-user">
                <konobar-form
                        v-if="selectedUser"
                        :fields="formFields"
                        :submit="$t('update')"
                        :post="'users' + '/' + selectedUser.id"
                        :item="selectedUser"
                        @success="formSuccess">
                </konobar-form>
            </b-modal>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: 'dashboard',
        data() {
            return {
                selectedUser: null,
                units: [],
                users: [],
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
                        label: this.$i18n.t('email'),
                        key: 'email',
                        sortable: true
                    }
                ],
                searchKeys: [
                    'first_name',
                    'last_name'
                ],
                formFields: [
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
                        key: 'email',
                        label: this.$i18n.t('email'),
                        type: 'email',
                        required: true
                    },
                    {
                        key: 'password',
                        label: this.$i18n.t('password'),
                        type: 'password',
                        required: true
                    },
                    {
                        key: 'password_confirmation',
                        label: this.$i18n.t('password_confirm'),
                        type: 'password',
                        required: true
                    },
                    {
                        key: 'role_id',
                        label: this.$i18n.t('role'),
                        type: 'select',
                        required: true,
                        options: [
                            {value: 1, text: this.$i18n.t('owner')},
                            {value: 2, text: this.$i18n.t('admin')},
                        ]
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
            getUnits() {
                konobarApi.get('units').then(response => {
                        this.units = response.data;
                    }
                );
            },
            getUsers() {
                konobarApi.get('users').then(response => {
                        this.users = response.data;
                    }
                );
            },
            formSuccess() {
                this.getUsers();
                this.$refs['new-user'].hide();
                this.$refs['edit-user'].hide();

            },
            editUser(id) {
                this.formFields[3].required = false;
                this.formFields[4].required = false;
                this.selectedUser = this.users.find(user => {return user.id === id});
                this.$refs['edit-user'].show();
            }
        },
        created() {
            this.getUnits();
            this.getUsers();
        }
    }
</script>