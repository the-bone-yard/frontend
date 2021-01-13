<template>
  <section>
    <article class='article-button'>
      <button @click="savePark" class='button-save-park'>{{ saved }}</button>
    </article>
    <article class='article-destination'>
      <h1 class='detail-descriptor'>{{ park.name }} </h1>
      <p>Address: {{ park.formatted_address }}</p>
    </article>
    <article class='article-description'>
      <p>{{ open }}</p>
      <p>Rating: {{ park.rating }} / 5</p>
      <img :src="determinePhoto()" :alt="'photo for ' + park.name" />
    </article>
    <button @click="mountDirections" class='button-get-directions'>Get Directions</button>
    <directions v-if="directionsIsMounted" :park="this.park"></directions>
    <h2>Not the right park for your pup?</h2>
    <router-link to='/results'><button>Explore Results</button></router-link>
  </section>
</template>

<script>
import Directions from './Directions.vue'
export default {
  components: { Directions },
  data() {
    return {
      parkName: this.$route.params.name,
      directionsIsMounted: false
    }
  },
  computed: {
    park() {
      return this.$store.state.searchResults.find(res => {
          return res.name === this.parkName
      })
    },
    open() {
      return this.park.opening_hours.open_now === true ? 'Open Now' : 'Closed Now'
    },
    saved() {
      if (this.$store.state.savedParks.includes(this.park)) {
        return 'PARK SAVED!'
      } else {
        return 'SAVE'
      }
    }
  },
  methods: {
    savePark() {
      this.$store.commit('savePark', this.park)
    },
    mountDirections() {
      this.directionsIsMounted = true;
    },
    determinePhoto() {
      const photoRef = this.park.photos[0].photo_reference
      if (photoRef) {
        return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000
                &photoreference=${photoRef}
                &key=${process.env.VUE_APP_GOOGLE_MAPS_API_KEY}`
      } else {
        return `https://encrypted-tbn0.gstatic.com/
                images?q=tbn:ANd9GcSbeshCBceIHNyh82XOdQ-6JZD77uYjUpBVqg&usqp=CAU`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_mixins.scss';
  .article-button {
    display: flex;
    justify-content: flex-end;
    margin-right: 1em;
  }

  button { 
    @include button-main-style
  }

  img {
    width: 12em;
    height: auto;
    border-radius: 13%;
    padding: 1em;
  }
</style>