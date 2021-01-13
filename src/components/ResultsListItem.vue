<template>
  <section class="item-card">
    <h1>{{ result.name }}</h1>
    <h1>{{ result.formatted_address }}</h1>
    <p>This park is {{ result.opening_hours.open_now ? 'open' : 'closed' }}</p>
    <p>Rating: {{ result.rating }}</p>
    <section class="item-card-bottom">
      <button 
        v-if="this.$route.path !== '/my-parks'" 
        @click="savePark" 
        class="save-button"
        :class="{ disabled: saved === 'PARK SAVED!' }"
        aria-describedby="Click this button to save this park as a favorite."
      >
        {{ saved }}
      </button>
      <router-link :to="`/results/${result.name}`" >
        <button 
          class='details-button'
          aria-describedby="Click this button to view all the details for this park."  
        >
        DETAILS
        </button>
      </router-link>
    </section>
  </section>
</template>

<script>
import { postSaved, getSaved } from '../apiCalls.js'
export default {
  props: ['result'],
  methods: {
    async savePark() {
      await postSaved(this.result, this.$store.state.email)
      getSaved()
        .then(data => {
          this.$store.commit('saveParks', data)
        })
    },
    unsavePark() {
      // implement code to unsave parks here
    }
  },
  computed: {
    saved() {
      return this.$store.state.savedParks.includes(this.result) ? 'PARK SAVED!' : 'SAVE'
    }
  }
};
</script>

<style lang="scss">
@import '../styles/_mixins.scss';
.item-card {
  @include customDisplayFlex(.8em, 1.5em, column);
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: .4em;
  width: 320px;
  filter: drop-shadow(0.2em 0.2em 0.2em rgba(0, 0, 0, 0.75));

  :first-child {
    margin-top: 0;
  }

  h1 {
    font-size: .8em;
    margin: .7em 0;
  }

  p {
    font-size: .8em;
    margin: 0;
  }

  .item-card-bottom {
    @include customDisplayFlex(0, 0);

    .details-button {
      margin-left: 1em;
    }
  }

  .save-button, .details-button, .unsave-button {
    @include button-main-style;  
    margin-top: .7em;
    width: 7em;
  }

  button.disabled {
    background-color: darkgray;
  }

  .disabled {
    pointer-events: none;
  @media screen and (max-width: 360px) {
    width: 260px;
  }
}
</style>
