<template>
  <div>
    <router-link v-for="item in list" :to="{name: 'Place', params: {id: item.id}}">
      <b-container data-aos="fade-right" data-aos-duration="700" fluid class="flex-center object restaurant">
        <div class="obj-details">
          <div class="mb-2">
            <h5 class="m-0">{{item.name}}</h5>
            <p class="m-0 grade"><i class="fas fa-star"></i> {{item.grade}}</p>
          </div>
          <i class="fas fa-map-marker-alt"></i>&nbsp;<span class="location"> {{item.location}}</span>
        </div>
      </b-container>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'restaurant',
  data() {
    return {
      list: [
        {
          id: '1',
          name: 'Radobolja',
          location: 'Kraljice Katarine, Mostar',
          grade: '4.7'
        },
        {
          id: '2',
          name: 'Prestige',
          location: 'Mepas Mall, Mostar',
          grade: '4.9'
        },
        {
          id: '3',
          name: 'Taboo',
          location: 'Vukovarska, Mostar',
          grade: '4.6'
        },
      ]
    }
  }
}
</script>
<style lang="scss">
  //HERE BECAUSE VUE TAKES A SHIT WITH BACKGROUND IMAGE LINKS
  .restaurant {
    background-image: url('../assets/images/restaurants.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
