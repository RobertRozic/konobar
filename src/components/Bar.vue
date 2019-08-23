<template>
  <div>
    <b-container v-for="item in list" data-aos="fade-right" data-aos-duration="700" fluid class="flex-center object caffe-bar">
      <div class="obj-details">
        <div class="mb-2">
          <h5 class="m-0">{{item.name}}</h5>
          <p class="m-0 grade"><i class="fas fa-star"></i> {{item.grade}}</p>
        </div>
        <i class="fas fa-map-marker-alt"></i>&nbsp;<span class="location"> {{item.location}}</span>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'bar',
  data() {
    return {
      list: [
        {
          name: 'Black Pearl',
          location: 'Kralja Tvrtka, Mostar',
          grade: '4.5'
        },
        {
          name: 'Ice Bar',
          location: 'Vukovarska, Mostar',
          grade: '4.6'
        },
        {
          name: 'Sky Lounge Bar',
          location: 'Braće Fejića, Mostar',
          grade: '4.0'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  //HERE BECAUSE VUE TAKES A SHIT WITH BACKGROUND IMAGE LINKS
  .caffe-bar {
    background-image: url('../assets/images/bars.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
