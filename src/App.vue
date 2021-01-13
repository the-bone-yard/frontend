<template>
  <div id="app">
    <TheHeader />
    <body-container>
      <router-view/>
    </body-container>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import BodyContainer from './components/BodyContainer.vue'
import { getSaved } from './apiCalls.js'
export default {
  components: { TheHeader, BodyContainer },
  mounted() {
    this.showPosition()
    getSaved()
      .then(data => {
        this.$store.commit('saveParks', data)
      })
  },
  methods: {
    showPosition() {
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          this.$store.commit('updateGeolocation', position)
        });
      } 
    },
  }
}
</script>

<style lang="scss">
body,
html {
  height: 100vh;
  padding: 0;
  margin: 0;
}

body {
  background-color: #afeceb;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.error {
  color: red;
}
</style>
