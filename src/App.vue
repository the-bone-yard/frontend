<template>
  <div id="app">
    <TheHeader />
    <!-- make dynamic with :name from park object -->
    <body-container>
      <router-view/>
    </body-container>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import BodyContainer from './components/BodyContainer.vue'

export default {
  components: { TheHeader, BodyContainer },
  data() {
    return {
      
    }
    //geolocation should probably stay local 
    //until we determine if multiple components will need it
  },
  mounted() {
    this.showPosition()
  },
  methods: {
    showPosition() {
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          this.$store.commit('updateGeolocation', position)
        });
      } 
    } 
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
