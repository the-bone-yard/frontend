<template>
  <section>
    <button @click="selectView">List View</button>
    <button @click="selectView">Map View</button>
    <results-list v-if="listView"></results-list>
    <results-map v-else></results-map>
  </section>
</template>

<script>
export default {
  data() {
    return {
      listView: true,
    };
  },
  methods: {
    selectView() {
      this.listView = !this.listView;
    },
  },
};
</script>

<style lang="scss" scoped></style>
