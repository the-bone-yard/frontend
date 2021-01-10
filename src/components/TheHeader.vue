<template>
  <section>
    <article class="bone-yard-header">
      <router-link to='/'>
        <img
          class="bone-yard-logo"
          alt="Bone Yard pawprint logo"
          src="../assets/paw_prints.png"
        />
      </router-link>
      <router-link to='/' class="title-link">
        <h1 class="bone-yard-font">The<br />Bone Yard</h1>
      </router-link>
    </article>
    <nav>
      <router-link to="/my-parks">My Parks</router-link> <br />
    </nav>
  </section>
</template>

<style scoped>
.bone-yard-font {
  font-family: 'Potta One', cursive;
}

.bone-yard-logo {
  width: 2.5em;
  height: 100%;
  margin-right: 1em;
}

.bone-yard-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
}

.title-link {
  text-decoration: none;
  color: black;
}
</style>
