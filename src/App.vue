<template>
  <div id="app">
    <TheHeader />
    <router-link to="/" exact/>
    <router-link to="/results/item-details" exact>
      <ResultsItemDetails @save:park='savePark' />
    </router-link>
    <router-view/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import ResultsItemDetails from './components/ResultsItemDetails.vue'

export default {
  components: { TheHeader, ResultsItemDetails },
  data() {
    return {
      savedParks: []
    }
  },
  provide() {
    return {
      savedParks: this.savedParks,
      savePark: this.savePark
    }
  },
  methods: {
    savePark(newPark) {
      this.savedParks = [...this.savedParks, newPark] 
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

body, html {
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>
