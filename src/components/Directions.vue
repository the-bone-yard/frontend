<template>
  <article v-if="this.directions.length">
    <p class='direction' :key='i' v-for="(direction, i) in directions">
      {{direction}}  
    </p>
  </article>
</template>

<script>
import { getDirections } from '../apiCalls.js'
export default {
  props: ["park"],
  data() {
    return {
      directions: []
    }
  },
  mounted() {
    const geolocation = this.$store.state.geolocation
    const parkCoords = this.park.geometry.location
    getDirections(geolocation, parkCoords)
    .then(data => this.directions = data.narratives)
  }
}
</script>

<style scoped>
.direction {
  margin: 1.5em;
}

article {
  text-align: left;
  max-width: 30em;
  margin: auto;
}

</style>