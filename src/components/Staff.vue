<template>
  <div>
    <b-container v-for="member in list" data-aos="fade" data-aos-duration="700" fluid class="staff-member w-100 py-3 my-3">
      <img src="../assets/images/face.png" alt="Staff photo" class="staff-photo">
      <div class="staff-details w-100  ml-3 flex-center">
        <p class="m-0 w-100 text-left">{{member.position}}</p>
        <h5 class="w-100 text-left">{{member.name}}</h5>
      </div>
      <i class="fas fa-star gray flex-center mr-2"></i>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'staff',
  data() {
    return {
      list: [
        {
          id: '1',
          position: 'Waiter',
          name: 'John Doe'
        },
        {
          id: '2',
          position: 'Waiter',
          name: 'Albert Einstein'
        },
        {
          id: '3',
          position: 'Waiter',
          name: 'Ray Liotta'
        },
        {
          id: '4',
          position: 'Waiter',
          name: 'Leonardo DiCaprio'
        },
        {
          id: '5',
          position: 'Waiter',
          name: 'Keanu Reeves'
        },
      ]
    }
  }
}
</script>
<style lang="scss">
  .staff-photo {
    max-height: 50px;
    max-width: 50px;
    object-fit: cover;
    border-radius: 50%;
  }
  .staff-details {
    flex-direction: column;
    h5 {
      font-weight: 600;
    }
    p {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.5);
    }
  }
  .staff-member {
    border-radius: 10px;
    -webkit-box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    display: flex;
    justify-content: space-between;
  }
</style>
