<template>
  <section>
    <article class="bone-yard-header">
      <h1>Bone Yard</h1>
      <img
        class="bone-yard-logo"
        alt="Bone Yard pawprint logo"
        src="https://images-na.ssl-images-amazon.com/images/I/31jVeYUkbhL._AC_SY550_.jpg"
      />
    </article>
    <nav>
      <router-link to="/">home</router-link> <br />
      <!-- might not need the home link here - click on bone yard title to go home -->
      <router-link to="/my-parks">my parks</router-link> <br />
      <router-link to="/find-park">find park</router-link>
    </nav>
  </section>
</template>

<style scoped>
.bone-yard-logo {
  width: 3em;
}
.bone-yard-header {
  display: flex;
  justify-content: space-between;
  padding: 1em;
}
</style>
