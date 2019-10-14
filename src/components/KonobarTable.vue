<template>
    <div class="p-2">
        <b-row v-if="searchKeys.length > 0">
            <b-col lg="6" xl="4">
                <b-input-group class="w-100 my-2" prepend="Pretraži">
                    <b-form-input type="text" v-model="searchText"></b-form-input>
                    <b-input-group-append>
                        <b-btn><span class="fa fa-search"></span></b-btn>
                    </b-input-group-append>
                </b-input-group>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
                <b-table striped hover responsive
                         show-empty
                         empty-text="Nema podataka za prikaz"
                         :items="filterItems"
                         :fields="columns"
                         class="text-center konobar-table align-middle"
                         :current-page="currentPage"
                         :per-page="perPage"
                         @row-clicked="rowClick">
                    <template slot="position" slot-scope="data">
                        {{(data.index + 1) + ((currentPage-1) * perPage)}}
                    </template>
                    <template slot="actions_slot" slot-scope="data">
                        <div class="flex-center actions-slot">
                            <div v-for="(action, key) in actions"
                                 class="action px-2"
                                 @click.stop="actionClick(key, data.item, $event)"
                                 v-b-tooltip.hover :title="action.name">
                                <i v-if="action.icon" :class="action.icon"></i>
                                <b-btn v-else :variant="action.variant">{{action.name}}</b-btn>
                            </div>
                        </div>
                    </template>
                </b-table>
                <b-pagination
                        align="center"
                        :total-rows="filterItems.length"
                        v-model="currentPage"
                        :per-page="perPage">
                </b-pagination>
            </b-col>
            <!--<b-col>
                <div class="text-right print-show w-100">
                    Stranica {{currentPage}} od {{totalPages}}
                </div>
            </b-col>-->
        </b-row>
    </div>
</template>

<script>
    export default {
        name: "konobar-table",
        props: {
            items: {
                type: Array,
                required: true
            },
            fields: {
                type: Array,
                required: true
            },
            actions: {
                type: Object
            },
            position: {
                type: Boolean
            },
            searchKeys: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                actions_slot: {
                    key: 'actions_slot',
                    label:  'Akcije'
                },
                position_slot: {
                    key: 'position',
                    label:  'Br.'
                },
                columns: this.fields,
                currentPage: 1,
                perPage: 10,
                searchText: ""
            }
        },
        computed: {
            filterItems() {
                if (this.searchKeys) {
                    return this.items.filter(item => {
                        let result = false;
                        this.searchKeys.forEach(key => {
                            if ( item[key].toLowerCase().includes(this.searchText.toLowerCase())) {
                                result = true;
                            }
                        });
                        return result;
                    });
                } else {
                    return this.items;
                }
            },
            totalPages() {
                return Math.ceil(this.filterItems.length / this.perPage);
            }
        },
        mounted() {
            if (this.actions) {
                this.columns.push(this.actions_slot);
            }
            if (this.position) {
                this.columns.unshift(this.position_slot);
            }
        },
        methods: {
            actionClick(action, item) {
                this.$emit('onAction', action, item)
            },
            rowClick(item, index, event) {
                this.$emit('rowClicked', item.id)
            }
        }
    }
</script>

<style lang="scss">
    .konobar-table {
        tr {
            &:hover {
                cursor: pointer;
            }
        }
    }
</style>
