<template>
  <section>
    <img
      class="puppy-picture"
      alt="picture of two puppies in the snow"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrnUwJ9xC5z-HtpYQZc3jHYJfcMtQUf8qzVg&usqp=CAU"
    />
    <h2>Find your pup a play date at the best dog parks around!</h2>
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
}
</style>
