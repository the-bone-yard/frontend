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
      <img :src='photo'/>
    </article>
    <button class='button-get-directions'>Get Directions</button>
    <!-- button is not functional yet - need to get a directions component w/ router -->
    <h2>Not the right park for your pup?</h2>
    <router-link to='/'><button>Search Again</button></router-link>
  </section>
</template>

<script>
import { getPhoto } from '../apiCalls.js'

export default {
  data() {
    return {
      parkName: this.$route.params.name,
      photo: ''
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
        return 'UNSAVE'
      } else {
        return 'SAVE'
      }
    }
  },
  methods: {
    savePark() {
      this.$store.commit('savePark', this.park)
    }
  },
  mounted() {
    getPhoto(this.park.photos[0].photo_reference)
    .then(data => this.photo = data.url)
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
</style>