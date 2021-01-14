<template>
  <section>
    <img
      class="puppy-picture"
      alt="Picture of two dogs playing in the grass."
      src="../assets/dogs_playing_home.jpeg"
    />
    <h2>Find your pup a new park to bark all over</h2>
    <Email v-if="$store.state.homeChildComp === 'Email'" />
    <FindPark v-else />
  </section>
</template>

<script>
import FindPark from '../components/FindPark.vue';
import Email from '../components/Email.vue';

export default {
  components: { Email, FindPark }
};
</script>

<style lang="scss" scoped>
.puppy-picture {
  width: 100%;
  border-radius: 5%;
  max-width: 1000px;
}
</style>
