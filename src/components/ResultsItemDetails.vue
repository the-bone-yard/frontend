<template>
  <section>
    <article class='article-button'>
      <button @click="savePark" class='button-save-park'>SAVE</button>
    </article>
    <article class='article-destination'>
      <h1 class='detail-descriptor'>{{ park.name }} </h1>
      <p>Address: {{ park.formatted_address }}</p>
    </article>
    <article class='article-description'>
      <p v-if="park.opening_hours.open_now">Open Now? {{ open }}</p>
      <p>Rating: {{ park.rating }} / 5</p>
      <splide :options="options">
        <splide-slide v-for="(photo, i) in park.photos" :key="i" >
          <article>{{ photo.html_attributions[0] }}</article>
          <!-- <img :src="photo.html_attributes[0]" :alt="'photo for ' + parkName" /> -->
        </splide-slide>
      </splide>
    </article>
    <button class='button-get-directions'>Get Directions</button>
    <!-- button is not functional yet - need to get a directions component w/ router -->
    <h2>Not the right park for your pup?</h2>
    <router-link to='/'><button>Search Again</button></router-link>
  </section>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';

export default {
  components: {
    Splide,
    SplideSlide
  },
  data() {
    return {
      options: {
          rewind: true,
          width: 1000,
          gap: '1rem',
        },
      parkName: this.$route.params.name,
      // photos: [
      //     {
      //       src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHGlnnbCP_rFQIQYvraw51_rFPpfuaq1to5A&usqp=CAU',
      //       height: 500,
      //       width: 500
      //     },
      //     {
      //       src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpOWFPV2DlS6Qnu-ZNlIkA4Cpiwo3WsXpCww&usqp=CAU',
      //       height: 500,
      //       width: 500
      //     },
      //     {
      //       src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHGlnnbCP_rFQIQYvraw51_rFPpfuaq1to5A&usqp=CAU',
      //       height: 500,
      //       width: 500
      //     }
      //   ],
    }
  },
  computed: {
    park() {
      return this.$store.state.searchResults.find(res => {
          return res.name === this.parkName
      })
    },
    open() {
      return this.park.opening_hours.open_now === true ? 'Yes' : 'No'
    }
  },
  methods: {
    savePark() {
      this.$store.commit('savePark', this.parkName)
    }
  }
}
// will need to get any details about park from props - passed from ResultsContainer
// specifically for parkName, photos, rating, open, address, etc.
</script>

<style lang="scss" scoped>
  .article-button {
    display: flex;
    justify-content: flex-end;
    margin-right: 1em;
  }

  button { 
    background-color: #CBE4E3;
    border-radius: 20%;
    padding: 1em;
    margin: 0.5em;

    &:hover {
      cursor: pointer;
      box-shadow: 5px 5px 5px rgb(73, 70, 70);
      background-color: #B1ECEA;
    }
  }
</style>