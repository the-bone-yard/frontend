<template>
  <section>
    <h2>Let's Go Play!</h2>
    <router-link
      :class="{ disabled: !this.$store.state.geolocation }"
      to="/results"
    >
      <button
        id="location"
        :class="{ disabled: !this.$store.state.geolocation }"
        @click="searchByLocation"
        aria-describedby="Click this button to search for parks based on your current location within a 30 mile radius."
      >
        Find a dog park near me!
      </button>
    </router-link>
    <h3 id="location-message" v-if="!this.$store.state.geolocation">
      {{ message }}
      <h4 v-if="message === 'Retrieving your location...'"><LoadingIcon /></h4>
    </h3>
    <h3 id="search-switch">--Or--</h3>
    <input
      class="search-input"
      type="text"
      aria-label="Type your search terms here"
      placeholder="Enter City, State to search"
      aria-describedby="Enter city and state to search for dog parks in that area."
      v-model="searchTerm"
    />
    <router-link v-if="searchTerm" to="/results">
      <button 
        id="search" 
        class="search-button" 
        @click="search"
        aria-describedby="Click this button to search by city or address after filling out the input above."
      >
        Get Started - woof!
      </button>
    </router-link>
  </section>
</template>

<script>
import { getResults } from '../apiCalls.js';
import { getSearch } from '../apiCalls.js';
import LoadingIcon from '../components/LoadingIcon.vue'

export default {
  components: { LoadingIcon },
  data() {
    return {
      searchTerm: '',
      message: 'Retrieving your location...'
    };
  },
  methods: {
    load() {
      if(!this.$store.state.geolocation) {
        this.message = 'Turn on location services and reload the page to search for parks near you!'
      } else {
        this.message = ''
      }
    },
    async search() {
      const results = await getSearch(this.searchTerm)
      await this.$store.commit('clearResults');
      this.$store.commit('storeResults', results);
      this.searchTerm = '';
    },
    async searchByLocation() {
      const results = await getResults(this.$store.state.geolocation.coords)
      await this.$store.commit('clearResults');
      this.$store.commit('storeResults', results);
    },
  },
  mounted() {
    setTimeout(() => this.load(), 8000)
  }
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
}
</style>
