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
      geolocation: null
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
          this.geolocation = position;
        });
      } 
    } 
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

body,
html {
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>
