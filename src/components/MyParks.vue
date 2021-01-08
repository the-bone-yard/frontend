<template>
  <section>
    <h1>MyParks Page</h1>
    <h2 v-if="!savedParks.length">Save a park to view it here!</h2>
    <article v-else>
      A saved park will display here!
    </article>
  </section>
</template>

<script>
  export default {
    inject: ['savedParks']
  }
</script>