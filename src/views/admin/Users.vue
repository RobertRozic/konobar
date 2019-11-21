<template>
    <b-container>
        <b-row>
            <b-col cols="12" class="p-2 d-flex justify-content-between">
                <h1 class="text-white">{{$t('users')}}</h1>
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
                     :title="$t('new_user')"
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
                     :title="$t('edit_user')"
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
        data() {
            return {
                selectedUser: null,
                users: [],
                fields: [
                    {
                        key: 'first_name',
                        label: this.$i18n.t('first_name'),
                        sortable: true
                    },
                    {
                        key: 'last_name',
                        label: this.$i18n.t('last_name'),
                        sortable: true
                    },
                    {
                        key: 'email',
                        label: this.$i18n.t('email'),
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
                            {value: 2, text: this.$i18n.t('owner')},
                            {value: 1, text: this.$i18n.t('admin')},
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
            getUsers() {
                konobarApi.get('users').then(response => {
                        this.users = response.data;
                    }
                );
            },
            formSuccess() {
                this.getUsers();
                this.$refs['new-user'].hide();
            },
            editUser(id) {
                this.selectedUser = this.users.find(user => {return user.id === id});
                this.$refs['edit-user'].show();
            }
        },
        created() {
            this.getUsers();
        }
    }
</script>