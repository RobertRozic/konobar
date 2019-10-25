<template>
    <b-form v-on:submit.prevent="action" enctype="multipart/form-data" class="flex-center flex-column konobar-form">
        <template v-for="field in fields" >
            <input v-if="field.type==='hidden'"
                   type="hidden"
                   :id="field.key"
                   :name="field.key"
                   :key="field.key"
                   :placeholder="field.placeholder"
                   v-model="form[field.key]"/>

            <b-form-group v-else
                          :key="field.key"
                          :label-cols-md="4"
                          :label="field.label"
                          :label-for="field.key">
                <b-form-select v-if="field.type==='select'"
                               :id="field.key"
                               :name="field.key"
                               :required="field.required"
                               v-model="form[field.key]"
                               :options="field.options">
                </b-form-select>

                <b-form-textarea v-else-if="field.type==='textarea'"
                                 :id="field.key"
                                 :name="field.key"
                                 :placeholder="field.placeholder"
                                 :required="field.required"
                                 v-model="form[field.key]"
                                 rows="3">
                </b-form-textarea>

                <b-form-file
                        v-else-if="field.type==='file'"
                        :state="Boolean(form[field.key])"
                        :id="field.key"
                        :name="field.key + (field.multiple ? '[]' : '')"
                        :placeholder="field.placeholder"
                        v-model="form[field.key]"
                        :required="field.required"
                        :multiple="field.multiple"
                        :file-name-formatter="formatNames">
                </b-form-file>

                <b-form-input  v-else
                               :id="field.key"
                               :type="field.type"
                               :name="field.key"
                               v-model="form[field.key]"
                               :required="field.required">
                </b-form-input>
            </b-form-group>
        </template>

        <b-btn variant="primary" type="submit" class="mt-4 w-50">
            {{submit}}
        </b-btn>
    </b-form>
</template>

<script>
    export default {
        props: {
            fields: {
                type: Array
            },
            post: {
                type: String
            },
            submit: {
                type: String
            },
            redirectTo: {
                type: String
            },
            item: {
                type: Object
            }
        },
        data () {
            return {
                form: {}
            }
        },
        methods: {
            action(e) {
                const formData = new FormData(e.target);
                let self = this;
                konobarApi.post(this.post, formData).then(response => {
                    if (response.status === 200 || response.status === 201) {
                        if (response.data.access_token)
                            self.$cookie.set('auth_token', response.data.access_token);
                        self.$emit('success');
                        if (self.redirectTo)
                            self.$router.push({path: self.redirectTo});
                    }
                })
            },
            formatNames(files) {
                if (files.length === 1) {
                    return files[0].name
                } else {
                    return `${files.length} files selected`
                }
            }
        },
        mounted() {
            let self = this;
            this.fields.forEach(item => {
                if (item.type === 'select') {
                    self.form[item.key] = null;
                }
                if (item.type === 'hidden') {
                    self.form[item.key] = item.value;
                }
            });
            if (this.item != null) {
                this.form = this.item;
            }
        }
    }
</script>

<style lang="scss">
    .konobar-form {
        .form-group {
            width: 100%;
        }
    }
</style>