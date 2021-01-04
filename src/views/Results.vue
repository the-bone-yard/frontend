<template>
  <section>
    <button @click="selectView">List View</button>
    <button @click="selectView">Map View</button>
    <results-list v-if="listView"></results-list>
    <results-map v-else></results-map>
  </section>
</template>

<script>
import ResultsList from '../components/ResultsList.vue'
import ResultsMap from '../components/ResultsMap.vue'
export default {
  data() {
    return {
      listView: true,
    };
  },
  components: {
    ResultsList,
    ResultsMap
  },
  methods: {
    selectView() {
      this.listView = !this.listView;
    },
  },
};
</script>

<style lang="scss" scoped></style>
