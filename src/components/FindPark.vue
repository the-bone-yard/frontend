<template>
  <section>
    <h3 class='success'>Success! {{ $store.state.email }} has been saved.</h3>
    <h2>Let's Go Play!</h2>
    <router-link
      :class="{ disabled: !this.$store.state.geolocation }"
      to="/results"
    >
      <button
        id="location"
        :class="{ disabled: !this.$store.state.geolocation }"
        @click="searchByLocation"
      >
        Find a dog park near me!
      </button>
    </router-link>
    <h3>--Or--</h3>
    <input
      class="search-input"
      type="text"
      aria-label="Type your search terms here"
      placeholder="Enter name, city or zip code to search"
      v-model="searchTerm"
    />
    <router-link v-if="searchTerm" to="/results">
      <button id="search" class="search-button" @click="search">
        Get Started - woof!
      </button>
    </router-link>
  </section>
</template>

<script>
import { getResults } from '../apiCalls.js';
import { getSearch } from '../apiCalls.js';
export default {
  data() {
    return {
      searchTerm: '',
    };
  },
  methods: {
    async search() {
      const results = await getSearch(this.searchTerm)
      this.$store.commit('storeResults', results);
      this.searchTerm = '';
    },
    async searchByLocation() {
      const results = await getResults(this.$store.state.geolocation.coords)
      this.$store.commit('storeResults', results);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/_mixins.scss';
section {
  @include customDisplayFlex(0, 0, column);
  align-items: center;
  justify-content: center;

  .search-input {
    margin: 10px;
    width: 250px;
    height: 20px;
    border-radius: 20%;
    padding: 1em;
  }

  button {
    @include button-main-style;
  }

  button.disabled {
    background-color: darkgray;
  }

  .disabled {
    pointer-events: none;
  }

  .success {
    color: green;
  }
}
</style>
