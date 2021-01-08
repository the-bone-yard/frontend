<template>
  <section class='item-card'>
    <h1>{{result.name}}</h1>
    <h1>{{result.formatted_address}}</h1>
  </section>
</template>

<script>
export default {
  props: ['result'],
}
</script>

<style>

</style>