<template>
  <section>
    <input
      class="search-input"
      type="text"
      placeholder="Search by name, city or zip code"
      v-model="searchTerm"
    />
    <button class="search-button" @click="search('searchTerm')">
      Get Started - woof!
    </button>
    <p v-if="searchTerm === ''">Please enter a park name, city, or zip code</p>
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
      if (this.searchTerm !== '') {
        this.searchTerm = '';
        //functionality for search goes here...
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.search-input {
  margin: 10px;
  width: 250px;
  height: 20px;
  border-radius: 20%;
  padding: 1em;
}
.search-button {
  border-radius: 20%;
  padding: 1em;
}
</style>
