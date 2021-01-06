<template>
  <section>
    <article class='article-button'>
      <button class='button-save-park'>SAVE</button>
    </article>
    <article class='article-destination'>
      <h1 class='detail-descriptor'>Destination: </h1>
      <p>Address: </p>
    </article>
    <article class='article-description'>
      <h1 class='detail-descriptor'>Description: </h1>
      <p>Open Now?</p>
      <p>Rating: /5</p>
    </article>
    <h1 class='detail-descriptor'>Directions: </h1>
    <h2>Not the right park for your pup?</h2>
    <article>
      <button>search again</button>
      <router-link to='/'><button>home</button></router-link>
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      photos: []
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
  .article-button {
    display: flex;
    justify-content: flex-end;
    margin-right: 1em;
  }

  button { 
    background-color: #CBE4E3;
    border-radius: 20%;
    padding: 1em;
    margin: 0.5em;

    &:hover {
      cursor: pointer;
      box-shadow: 5px 5px 5px rgb(73, 70, 70);
      background-color: #B1ECEA;
    }
  }
</style>