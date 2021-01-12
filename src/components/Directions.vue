<template>
  <ol v-if="this.directions.length">
    <li :key='i' v-for="(direction, i) in directions">
      {{direction}}  
    </li>
  </ol>
</template>

<script>
export default {
  props: ["park"],
  data() {
    return {
      directions: []
    }
  },
  mounted() {
    // This is where the apiCall for getting directions will happen 
    // For now there is placeholder functionality for testing purposes
    this.directions = [
        "Up",
        "Up",
        "Down",
        "Down",
        "Left",
        "Right",
        "Left",
        "Right",
        "B",
        "A"
      ]
    // apiCall functionality might look like this:
    // this.directions = getDirections(this.park)
  }
}
</script>

<style>

</style>