<template>
  <section>
    <img
      class="puppy-picture"
      alt="picture of two puppies in the snow"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrnUwJ9xC5z-HtpYQZc3jHYJfcMtQUf8qzVg&usqp=CAU"
    />
    <h2>Find your pup a play date at the best dog parks around!</h2>
    <FindPark />
  </section>
</template>

<script>
import FindPark from '../components/FindPark.vue';

export default {
  components: { FindPark },
};
</script>

<style scoped>
section {
  margin: 1em;
  background-color: #afeceb;
  padding: 2em;
}
.puppy-picture {
  width: 15em;
  border-radius: 5%;
}
</style>
