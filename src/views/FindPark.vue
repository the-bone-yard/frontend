<template>
  <section>
    <input type="text" v-model="searchTerm" />
    <button @click="search(searchTerm)">Find a Park!</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: '',
    };
  },
  methods: {
    search(searchTerm) {},
  },
};
</script>
