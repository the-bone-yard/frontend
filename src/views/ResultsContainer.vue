<template>
  <section>
    <button 
        :class="selectedComponent === 'results-list' ? 'active' : null"
        @click="setSelectedComponent('results-list')">List View</button>
    <button 
        :class="selectedComponent === 'results-map' ? 'active' : null"
        @click="setSelectedComponent('results-map')">Map View</button>
    <keep-alive>
      <component 
        :is="selectedComponent" 
        :searchResults="this.$store.state.searchResults"></component>
    </keep-alive>
  </section>
</template>

<script>
import ResultsList from '../components/ResultsList.vue'
import ResultsMap from '../components/ResultsMap.vue'
export default {
  data() {
    return {
      selectedComponent: "results-list",
    };
  },
  components: {
    ResultsList,
    ResultsMap
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/_variables.scss';
@import '../styles/_mixins.scss';

button {
    @include button-dark-green;
    height: 2em;
    padding: .4em;
    margin: .8em;
    width: 7em;
    font-size: .8em;

    &:hover {
        @include button-white-hover;
    }
}

.active {
    @include button-white-hover;
}
</style>
