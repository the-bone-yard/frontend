<template>
  <section class='results-list' :class="{ loading: message === 'Loading parks...' }">
    <h3 v-if="message === 'Loading parks...'"><LoadingIcon /></h3>
    <h4 v-if="!$store.state.searchResults.length">
      <h5>{{ message }}</h5>
      <FindPark v-if="noResults" />
    </h4>
    <section v-else :key='i' v-for='(result, i) in searchResults'>
      <results-list-item :result='result'></results-list-item>
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
      noResults: false
    }
  },
  methods: {
    load() {
      if (!this.$store.state.searchResults.length) {
        this.noResults = true
      }
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

<style scoped>
.loading {
  cursor:  wait;
}
</style>