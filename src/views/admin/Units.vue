<template>
    <b-container>
        <b-row>
            <b-col cols="12" class="p-2 d-flex justify-content-between">
                <h1 class="text-white">Units</h1>
                <div class="w-25 flex-center" v-if="user.role_id === 2">
                    <b-btn variant="primary"
                           class="w-100"
                           v-b-modal.new-unit>New</b-btn>
                </div>
            </b-col>
            <b-col>
                <konobar-table
                        position
                        :items="units"
                        :fields="fields"
                        :search-keys="searchKeys"
                        @rowClicked="editUnit"
                        class="white-bg">
                </konobar-table>
            </b-col>
        </b-row>
        <template v-if="user.role_id === 2">
            <b-modal
                    centered
                    hide-footer
                    ref="new-unit"
                    title="New unit"
                    id="new-unit">
                <konobar-form :fields="formFields"
                              submit="Create"
                              post="units"
                              @success="formSuccess">
                </konobar-form>
            </b-modal>
            <b-modal centered
                     hide-footer
                     ref="edit-unit"
                     title="Edit unit"
                     id="edit-unit">
                <konobar-form
                        v-if="selectedUnit"
                        :fields="formFields"
                        submit="Update"
                        :post="'units' + '/' + selectedUnit.id"
                        :item="selectedUnit"
                        @success="formSuccess">
                </konobar-form>
            </b-modal>
        </template>
    </b-container>
</template>

<script>
    export default {
        data() {
            return {
                selectedUnit: null,
                units: [],
                owners: [],
                townships: [],
                fields: [
                    {
                        key: 'name',
                        sortable: true
                    },
                    {
                        label: 'Grad',
                        key: 'township.name',
                        sortable: true
                    },
                    {
                        key: 'address',
                        sortable: true
                    },
                    {
                        key: 'code',
                        sortable: true
                    }
                ],
                searchKeys: [
                    'name',
                    'address'
                ],
                formFields: [
                    {
                        key: 'type',
                        label: 'Type',
                        type: 'select',
                        required: true,
                        options: [
                            {value: 1, text: 'Restaurant'},
                            {value: 2, text: 'Caffe Bar'},
                            {value: 3, text: 'Bar'}
                        ]
                    },
                    {
                        key: 'owner_id',
                        label: 'Owner',
                        type: 'select',
                        required: true,
                        options: []
                    },
                    {
                        key: 'name',
                        label: 'Name',
                        type: 'text',
                        required: true
                    },
                    {
                        key: 'address',
                        label: 'Address',
                        type: 'text',
                        required: true
                    },
                    {
                        key: 'township_id',
                        label: 'Township',
                        type: 'select',
                        required: true,
                        options: []
                    },
                    {
                        key: 'code',
                        label: 'Code',
                        type: 'text',
                        required: true
                    },
                    {
                        key: 'images',
                        label: 'Images',
                        type: 'file',
                        multiple: true,
                        //required: true
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
            formSuccess() {
                this.getUnits();
                this.$refs['new-unit'].hide();
                this.$refs['edit-unit'].hide();
            },
            editUnit(id) {
                this.selectedUnit = this.units.find(unit => {return unit.id === id});
                this.$refs['edit-unit'].show();
            }
        },
        created() {
            this.getUnits();
            konobarApi.get('townships').then(response => {
                    this.townships = response.data;
                    this.townships.forEach(township => {
                        this.formFields[4].options.push(
                            {
                                text: township.name,
                                value: township.id
                            }
                        )
                    });
                }
            );
            konobarApi.get('users').then(response => {
                    this.owners = response.data;
                    this.owners.forEach(owner => {
                        this.formFields[1].options.push(
                            {
                                text: owner.full_name,
                                value: owner.id
                            }
                        )
                    });
                }
            );
        }
    }
</script>