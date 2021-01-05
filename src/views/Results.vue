<template>
  <section>
    <button @click="setSelectedComponent('results-list')">List View</button>
    <button @click="setSelectedComponent('results-map')">Map View</button>
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </section>
</template>

<script>
import ResultsList from '../components/ResultsList.vue'
import ResultsMap from '../components/ResultsMap.vue'
export default {
  data() {
    return {
      listView: true,
      selectedComponent: "results-list"
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
