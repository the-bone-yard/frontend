<template>
  <section class='results-list'>
    <h1>Result List</h1>
    <section :key='i' v-for='(result, i) in searchResults'>
      <results-list-item :result='result'></results-list-item>
    </section>
  </section>
</template>

<script>
import ResultsListItem from './ResultsListItem.vue'
export default {
  props: ['searchResults'],
  components: { ResultsListItem }
}
</script>