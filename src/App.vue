<template>
  <div id="app">
    <TheHeader />
    <router-view/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'

export default {
  components: { TheHeader },
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
  height: 100%;
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #d6eef2;
}
</style>
