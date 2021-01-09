<template>
  <section class="item-card">
    <button @click="savePark" class="save-button">
      SAVE
    </button>
    <h1>{{ result.name }}</h1>
    <h1>{{ result.formatted_address }}</h1>
  </section>
</template>

<script>
export default {
  props: ['result'],
  methods: {
    savePark() {
      this.$store.commit('savePark', this.result.name)
    }
  }
};
</script>

<style>
.item-card {
  position: relative;
  border-style: solid;
}

.save-button {
  position: absolute;
  top: 1em;
  right: 1em;
}
</style>
