<template>
    <div class="flat-wrap" v-if="unit">
        <div class="obj-nav">
            <i @click="$router.go(-1)" class="fas fa-arrow-left"></i>
            <p class="m-0">Rate us</p>
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
                <p class="review-num m-0">{{unit.review_count}} reviews</p>
            </div>
            <b-btn variant="warning" class="w-100 rate-btn my-4" v-b-modal.credentials>Rate object</b-btn>
            <b-container fluid class="employees-wrap mt-4 p-0 w-100 d-flex">
                <p class="mb-0 mt-4">Employees</p>
                <h5 class="mb-4">Rate our service</h5>
                <router-link v-for="member in unit.employees"
                             :to="{ name: 'RateStaff', params: {id: member.id} }"
                             class="staffLink">
                    <employee :item="member"></employee>
                </router-link>
            </b-container>
        </div>
        <b-modal id="credentials" hide-footer centered ref="credentialsRef" title="Please enter your code and email.">
            <input type="text" name="code" class="modal-input" placeholder="Code">
            <input type="email" name="email" class="modal-input" placeholder="E-mail">
            <router-link :to="{name: 'RateObject', params: {id: this.$route.params.id}}" class="btn btn-warning continue-btn">Continue</router-link>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: 'unit',
        data() {
            return {
                unit: null
            }
        },
        methods : {
            hideCredentialsModal() {
                this.$refs.credentialsRef.hide()
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