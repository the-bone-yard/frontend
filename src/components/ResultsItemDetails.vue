<template>
  <section>
    <article class='article-button'>
      <button class='button-save-park'>SAVE</button>
    </article>
    <h1 class='detail-descriptor'>Destination: </h1>
    <h1 class='detail-descriptor'>Description: </h1>
    <h1 class='detail-descriptor'>Directions: </h1>
    <h2>Not the right park for your pup?</h2>
    <article>
      <button>search again</button>
      <button>home</button>
    </article>
  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  button {
    border-radius: 20%;
    padding: 1em;
    margin: 0.5em;
  }

  .article-button {
    display: flex;
    justify-content: flex-end;
    margin-right: 1em;
  }

  button { 
    background-color: #CBE4E3;

    &:hover {
      cursor: pointer;
      box-shadow: 5px 5px 5px rgb(73, 70, 70);
    }
  }
</style>