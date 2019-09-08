<template>
    <b-container v-if="user.role_id === 1">
        <b-row>
            <b-col cols="12" class="p-2 d-flex justify-content-between">
                <h1 class="text-white">Users</h1>
                <div class="w-25 flex-center">
                    <b-btn variant="primary"
                           class="w-100"
                           v-b-modal.new-user>New</b-btn>
                </div>
            </b-col>
            <b-col>
                <konobar-table
                        position
                        :items="users"
                        :fields="fields"
                        :search-keys="searchKeys"
                        class="white-bg">
                </konobar-table>
            </b-col>
            <b-modal centered
                     ref="new-user"
                     title="New user"
                     id="new-user">
                <konobar-form :fields="formFields"
                              submit="Create"
                              post="register"
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
                users: [],
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
                        key: 'email',
                        label: 'Email',
                        type: 'email',
                        required: true
                    },
                    {
                        key: 'password',
                        label: 'Password',
                        type: 'password',
                        required: true
                    },
                    {
                        key: 'password_confirmation',
                        label: 'Password confirm',
                        type: 'password',
                        required: true
                    },
                    {
                        key: 'role_id',
                        label: 'Role',
                        type: 'select',
                        required: true,
                        options: [
                            {value: 2, text:'Owner'},
                            {value: 1, text:'Administrator'},
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
            }
        },
        created() {
            this.getUsers();
        }
    }
</script>