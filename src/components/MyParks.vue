<template>
  <section>
    <h1>My Saved Parks</h1>
    <h2 v-if="!$store.state.savedParks.length">Save a park to view it here!</h2>
    <article v-else>
      <ol>
        <li v-for="park in $store.state.savedParks" :key="park">{{ park }}</li>
      </ol>
    </article>
  </section>
</template>

<script>
export default {

}
</script>