<template>
  <section class='results-list'>
    <h4 v-if="!$store.state.searchResults.length">
      <h5>No results found</h5>
      <FindPark />
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
  components: { ResultsListItem, FindPark }
}
</script>