<template>
  <section>
    <button @click="setSelectedComponent('results-list')">List View</button>
    <button @click="setSelectedComponent('results-map')">Map View</button>
    <keep-alive>
      <component 
        :is="selectedComponent" 
        :searchResults="searchResults"></component>
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
      searchResults: []
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

<style lang="scss" scoped></style>
