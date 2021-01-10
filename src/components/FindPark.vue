<template>
  <section>
    <h2>Let's Go Play!</h2>
    <button
      :class="{ disabled: !this.$store.state.geolocation }"
      @click="searchByLocation"
    >
      Find a dog park near me!
    </button>
    <h3>--Or--</h3>
    <input
      class="search-input"
      :class="{ invalid: inputIsInvalid }"
      type="text"
      placeholder="Search by name, city or zip code"
      ref="enteredValue"
    />
    <button class="search-button" @click="setSearchTerm">
      Get Started - woof!
    </button>
    <p class="error-message" v-if="inputIsInvalid">
      Please enter a park name, city, or zip code
    </p>
  </section>
</template>

<script>
import { getResults } from '../apiCalls.js';
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
    async searchByLocation() {
      const results = await getResults(
        this.$store.state.geolocation.coords
      ).then((data) => data);
      this.$store.commit('storeResults', results);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/_variables.scss';
section {
	display: flex;
	flex-direction: column;
	align-items: center;
  justify-content: center;

  .invalid {
    border: 2px solid red;
  }

  .search-input {
    margin: 10px;
    width: 250px;
    height: 20px;
    border-radius: 20%;
    padding: 1em;
  }

	button {
    border-color: $dark-green-border;
		border-radius: 20%;
		padding: 1em;
    background-color: $dark-green;
    color: white;

    &:hover {
      background-color: $light-green-hover;
    }
	}
}

.disabled {
  background-color: #ccc;
}

.error-message {
  font-weight: bold;
  color: red;
}
</style>
