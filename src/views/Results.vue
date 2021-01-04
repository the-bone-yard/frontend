<template>
  <section>
    <button @click="selectView">List View</button>
    <button @click="selectView">Map View</button>
    <results-list v-if=""></results-list>
    <results-map></results-map>
  </section>
</template>

<script>
export default {
  data() {
    return {
      view: 'list',
    };
  },
  methods: {
    // selectView() {
    // }
  },
};
</script>

<style lang="scss" scoped></style>
