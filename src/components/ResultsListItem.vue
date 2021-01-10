<template>
  <section class="item-card">
    <article class='buttons-article'>
      <button @click="savePark" class="save-button">
        SAVE
      </button>
      <router-link to='/results/item-details'>
        <button class='details-button'>
          DETAILS
        </button>
      </router-link>
    </article>
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
  border-style: solid;
}

.save-button {
  position: absolute;
  top: 1em;
  right: 1em;
}

.details-button {
  position: absolute;
  top: 1em;
  left: 1em;
}

.buttons-article {
  position: relative;
  display: flex;
}
</style>
