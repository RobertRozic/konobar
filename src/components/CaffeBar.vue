<template>
  <div>
    <router-link v-for="item in list" :to="{name: 'Place', params: {id: item.id}}">
      <b-container data-aos="fade-right" data-aos-duration="700" fluid class="flex-center object caffe-bar">
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
  name: 'caffebar',
  data() {
    return {
      list: [
        {
          id: '4',
          name: 'Marachino',
          location: 'Mepas Mall, Mostar',
          grade: '4.7'
        },
        {
          id: '5',
          name: 'Alf',
          location: 'Stjepana Radića, Mostar',
          grade: '5.0'
        },
        {
          id: '6',
          name: 'Basket',
          location: 'Zagrebačka, Mostar',
          grade: '4.6'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  //HERE BECAUSE VUE TAKES A SHIT WITH BACKGROUND IMAGE LINKS
  .caffe-bar {
    background-image: url('../assets/images/coffeeshops.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
