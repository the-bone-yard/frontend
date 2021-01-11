<template>
  <section class='results-list'>
    <h4 v-if="!$store.state.searchResults.length">
      <h5> {{ message }}</h5>
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
  components: { ResultsListItem, FindPark },
  computed: {
    message() {
      if (this.noResults) {
        return 'Sorry, no results found. Try a different search!'
      } else {
        return'Loading parks...'
      }
    }
  }
}
</script>