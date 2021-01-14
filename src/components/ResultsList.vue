<template>
  <section class='results-list' :class="{ loading: message === 'Loading parks...' }">
    <h3 v-if="message === 'Loading parks...'"><LoadingIcon /></h3>
    <h4 v-if="!$store.state.searchResults.length">
      <h5>{{ message }}</h5>
      <FindPark v-if="noResults" />
    </h4>
    <section v-else>
    <button v-if="!sorted" @click="sortByRating">Sort By Rating</button>
    <h4 v-else>Parks are sorted from highest to lowest rating below.</h4>
    <section :key='i' v-for='(result, i) in searchResults'>
      <results-list-item :result='result'></results-list-item>
    </section>
    </section>
  </section>
</template>

<script>
import ResultsListItem from './ResultsListItem.vue';
import FindPark from './FindPark.vue';
import LoadingIcon from './LoadingIcon.vue';

export default {
  props: ['searchResults'],
  data() {
    return {
      noResults: false,
      sorted: false
    }
  },
  methods: {
    load() {
      if (!this.$store.state.searchResults.length) {
        this.noResults = true
      }
    },
    sortByRating() {
      this.$store.state.searchResults.sort((parkA, parkB) => {
        return parkB.rating - parkA.rating
      })
      this.sorted = true
    }
  },
  mounted() {
    setTimeout(() => this.load(), 6000)
  },
  components: { ResultsListItem, FindPark, LoadingIcon },
  computed: {
    message() {
      if (this.noResults) {
        return 'Sorry, no results found. Try a different search!'
      } else if (!this.noResults && !this.$store.state.searchResults.length) {
        return 'Loading parks...'
      } else {
        return ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_mixins.scss';

.results-list {
  @include customDisplayFlex(0, 0);
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.loading {
  cursor:  wait;
}

button {
  @include button-main-style;
}

</style>