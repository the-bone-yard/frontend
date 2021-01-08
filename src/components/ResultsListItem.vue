<template>
  <section class='item-card'>
    <button class='save-button' @click="'save:park', parkName">SAVE</button>
    <h1>{{result.name}}</h1>
    <h1>{{result.formatted_address}}</h1>
  </section>
</template>

<script>
export default {
  props: ['result'],
  inject: ['savePark']
}
</script>

<style>
.item-card {
  position: relative;
  border-style: solid;
}

.save-button {
  position:absolute; 
  top: 1em; 
  right: 1em;
}
</style>