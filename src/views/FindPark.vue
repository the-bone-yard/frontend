<template>
  <section>
    <input
      type="text"
      placeholder="Search by name, address or zip code"
      v-model="searchTerm"
    />
    <button @click="search('searchTerm')">Find a Park!</button>
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
    search() {
      console.log(this.searchTerm);
      //functionality for search goes here...
    },
  },
};
</script>

// Add error handling for no entry
