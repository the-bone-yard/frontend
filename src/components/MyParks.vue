<template>
  <section>
    <h1>MyParks Page</h1>
    <h2 v-if="!savedParks.length">Save a park to view it here!</h2>
    <article v-else>
      <ol>
        <li v-for="park in savedParks" :key="park">{{ park }}</li>
      </ol>
    </article>
  </section>
</template>

<script>
  export default {
    inject: ['savedParks']
  }
</script>