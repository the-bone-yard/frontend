<template>
  <section>
    <h2>Let's Go Play!</h2>
    <button @click="searchByLocation">Find a dog park near me!</button>
    <h3>--Or--</h3>
    <input
      class="search-input"
      type="text"
      placeholder="Search by name, city or zip code"
      ref="enteredValue"
    />
    <button class="search-button" @click="setSearchTerm">
      Get Started - woof!
    </button>
    <p v-if="inputIsInvalid">Please enter a park name, city, or zip code</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: '',
      inputIsInvalid: false,
    };
  },
  methods: {
    setSearchTerm() {
      const enteredValue = this.$refs.enteredValue.value;
      if (enteredValue === '') {
        this.inputIsInvalid = true;
      } else {
        this.searchTerm = enteredValue;
        this.search(this.searchTerm);
      }
    },
    search() {
      //functionality for search goes here...
      this.searchTerm = '';
      this.inputIsInvalid = false;
    },
    searchByLocation() {
      //functionality based on geolocation goes here
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
button {
  border-radius: 20%;
  padding: 1em;
}
</style>
