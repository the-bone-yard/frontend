<template>
  <section>
    <article class='article-button'>
      <button @click="$emit('save:park', parkName)" class='button-save-park'>SAVE</button>
    </article>
    <article class='article-destination'>
      <h1 class='detail-descriptor'>Destination: </h1>
      <p>Address: </p>
    </article>
    <article class='article-description'>
      <h1 class='detail-descriptor'>Description: </h1>
      <p>Open Now?</p>
      <p>Rating: /5</p>
      <splide :options="options">
        <splide-slide v-for="photo in photos" :key="photo.id" >
          <img :src="photo.src" :alt="'photo for ' + parkName" />
        </splide-slide>
      </splide>
    </article>
    <article class='article-directions'>
      <h1 class='detail-descriptor'>Directions: </h1> 
    </article>
    <h2>Not the right park for your pup?</h2>
    <article>
      <!-- add router link for 'search again' button to return to search route -->
      <button>search again</button>
      <router-link to='/'><button>home</button></router-link>
    </article>
  </section>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';

export default {
  components: {
    Splide,
    SplideSlide
  },
  inject: ['savePark'],
  data() {
    return {
      options: {
          rewind: true,
          width: 1000,
          gap: '1rem',
        },
      photos: [
          {
            id: 1,
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHGlnnbCP_rFQIQYvraw51_rFPpfuaq1to5A&usqp=CAU',
            height: 500,
            width: 500
          },
          {
            id: 2,
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpOWFPV2DlS6Qnu-ZNlIkA4Cpiwo3WsXpCww&usqp=CAU',
            height: 500,
            width: 500
          },
          {
            id: 3,
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHGlnnbCP_rFQIQYvraw51_rFPpfuaq1to5A&usqp=CAU',
            height: 500,
            width: 500
          }
        ],
      parkName: 'Chatfield State Park'
    }
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