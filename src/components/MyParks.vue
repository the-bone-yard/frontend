<template>
  <section>
    <h1>My Saved Parks</h1>
    <h2 v-if="!$store.state.savedParks.length">Save a park to view it here!</h2>
    <results-list-item v-else 
      v-for="(result, i) in $store.state.savedParks" 
      :key='i' 
      :result='result'></results-list-item>
  </section>
</template>

<script>
import ResultsListItem from './ResultsListItem.vue';
export default {
  components: { ResultsListItem }
}
</script>