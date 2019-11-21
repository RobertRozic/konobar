<template>
    <div class="flat-wrap" v-if="unit">
        <div class="obj-nav">
            <i @click="$router.go(-1)" class="fas fa-arrow-left"></i>
            <p class="m-0">{{$t('rate_us')}}</p>
            <span></span>
        </div>
        <div class="obj-wrap">
            <div class="obj-inner-wrap">
                <div class="obj-identity">
                    <h4 class="mb-1">{{unit.name}}</h4>
                    <p class="mb-2">{{unit.address}}, {{unit.township.name}}</p>
                </div>
                <div class="obj-grade">
                    <div class="grade-num flex-center">
                        <h5 class="mb-0 text-center yellow">{{unit.average_rating}}</h5>
                    </div>
                </div>
            </div>
            <div class="star-wrap">
                <div class="stars">
                    <i v-for="i in Math.floor(unit.average_rating)" class="fas fa-star yellow"></i>
                    <i v-for="i in (5 - Math.floor(unit.average_rating))"class="fas fa-star gray"></i>
                </div>
                <p class="review-num m-0">{{$tc('review', unit.review_count)}}</p>
            </div>
            <b-btn variant="warning" class="w-100 rate-btn my-4" @click="unitClick" v-b-modal.credentials>{{$t('rate_object')}}</b-btn>
            <b-container fluid class="employees-wrap mt-4 p-0 w-100 d-flex">
                <p class="mb-0 mt-4">{{$tc('employee', 2)}}</p>
                <h5 class="mb-4">{{$t('rate_service')}}</h5>
                <employee v-for="member in unit.employees"
                          @click.native="employeeClick(member.id)"
                          v-b-modal.credentials
                          :key="member.id"
                          :item="member"></employee>
            </b-container>
        </div>
        <b-modal id="credentials" hide-footer centered ref="credentialsRef" :title="$t('enter_code_email')">
            <b-form v-on:submit.prevent="verifyRate">
                <input type="text" v-model="form.code" name="code" class="modal-input" :placeholder="$t('code')">
                <input type="email" v-model="form.email" name="email" class="modal-input" :placeholder="$t('email')">
                <button type="submit" class="btn btn-warning continue-btn">{{$t('continue')}}</button>
            </b-form>
        </b-modal>
        <b-modal id="error_permission"
                 hide-footer centered
                 ref="errorRef"
                 :title="$t('rate_error')">
            {{$t('rate_other')}}
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: 'unit',
        data() {
            return {
                unit: null,
                form: {}
            }
        },
        methods : {
            employeeClick(id) {
                this.form.unit_id = null;
                this.form.employee_id = id;
            },
            unitClick() {
                this.form.employee_id = null;
                this.form.unit_id = this.unit.id;
            },
            verifyRate() {
                konobarApi.post('/reviews/permission', this.form).then(response => {
                    if (response.status === 200) {
                        let data = response.data;
                        this.$refs.credentialsRef.hide();
                        if (data.permission) {
                            this.$store.dispatch('setReview', response.data);
                            this.$router.push('/review');
                        } else {
                            this.$refs.errorRef.show();
                        }
                    }
                });
            },
        },
        created() {
            konobarApi.get('units/' + this.$route.params.id).then(response => {
                if (response.status === 200) {
                    this.unit = response.data;
                }
            });
        }
    }
</script>

<style lang="scss">
    .obj-wrap {
        border-top: .5px solid #eee;
        border-radius: 15px 15px 0 0;
        min-height: 90vh;
        padding: 20px;
        display: flex;
        flex-direction: column;
    }
    .obj-inner-wrap {
        display: flex;
        justify-content: space-between;
    }
    .obj-identity {
        display: flex;
        flex-direction: column;
        h4 {
            font-weight: 600;
        }
        p {
            color: rgba(0, 0, 0, 0.5)
        }
    }
    .obj-grade {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    .grade-num {
        height: 50px;
        width: 50px;
        border-radius: 10px;
        background-color: rgba(245, 166, 35, 0.2);
        border: .5px solid #f5a623;
        margin-bottom: 5px;
    }
    .review-num {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.5);
    }
    .star-wrap {
        display: flex;
        justify-content: space-between;
    }
    .rate-btn {
        color: #FFF !important;
        border-radius: 5px!important;
    }
    .employees-wrap {
        border-top: .5px solid #eee;
        flex-direction: column;
        p {
            font-size: 14px;
            color: rgba(0, 0, 0, 0.5)
        }
        h5 {
            font-weight: 600;
        }
    }
</style>