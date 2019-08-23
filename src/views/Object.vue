<template>
  <div class="flat-wrap">
    <div class="obj-nav">
      <router-link :to="'/'"><i class="fas fa-arrow-left"></i></router-link>
      <p class="m-0">Rate us</p>
      <span></span>
    </div>
    <div class="obj-wrap">
      <div class="obj-inner-wrap">
        <div class="obj-identity">
          <h4 class="mb-1">Object</h4>
          <p class="mb-2">Location, Mostar</p>
        </div>
        <div class="obj-grade">
          <div class="grade-num flex-center">
            <h5 class="mb-0 text-center yellow">4.6</h5>
          </div>
        </div>
      </div>
      <div class="star-wrap">
        <div class="stars">
          <i class="fas fa-star yellow"></i>
          <i class="fas fa-star yellow"></i>
          <i class="fas fa-star yellow"></i>
          <i class="fas fa-star yellow"></i>
          <i class="fas fa-star gray"></i>
        </div>
        <p class="review-num m-0">122 reviews</p>
      </div>
      <b-btn variant="warning" class="w-100 rate-btn my-4" v-b-modal.credentials>Rate object</b-btn>
      <b-container fluid class="employees-wrap mt-4 p-0 w-100 d-flex">
        <p class="mb-0 mt-4">Employees</p>
        <h5 class="mb-4">Rate our service</h5>
        <staff></staff>
      </b-container>
    </div>
    <b-modal id="credentials" hide-footer centered ref="credentialsRef" title="Please enter your code and email.">
      <input type="text" name="code" class="modal-input" placeholder="Code">
      <input type="email" name="email" class="modal-input" placeholder="E-mail">
      <b-btn variant="warning" class="continue-btn">Continue</b-btn>
    </b-modal>
  </div>
</template>

<style lang="scss">
  .flat-wrap {
    min-height: 100vh;
    background-color: #FFF;
  }
  .obj-nav {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    padding: 15px;
    color: rgba(0, 0, 0, 0.6);
    a {
      color: rgba(0, 0, 0, 0.6);
    }
  }
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
  .yellow {
    color: #f5a623;
  }
  .gray {
    color: #c8c8c8;
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

  //Modal window
  .continue-btn {
    color: #FFF !important;
    border-radius: 5px !important;
    width: 100%;
    padding: 8px;
  }
  .modal-input {
    width: 100%;
    padding: 15px;
    border-radius: 5px;
    outline: none!important;
    margin-bottom: 15px;
    border: .5px solid #eee;
    &:focus {
      border: .5px solid #e7b949 !important;
    }
  }
</style>

<script>
    export default {
        name: 'place', //Object is a reserved word
        data() {
            return {
                content: null
            }
        },
        methods : {
          hideCredentialsModal() {
            this.$refs.credentialsRef.hide()
          },
        },
        created() {

        }
    }
</script>
