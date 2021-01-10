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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #afeceb;
}
</style>
