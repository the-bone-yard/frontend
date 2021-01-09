<template>
  <div id="app">
    <TheHeader />
    <router-view/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'

export default {
  components: { TheHeader }
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
