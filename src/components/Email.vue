<template>
  <section>
    <article v-if="!message.includes('Success!')">
      <h1>Enter your email to get started!</h1>
      <input 
        type='email' 
        aria-label="Type your email here"
        placeholder="example@gmail.com"
        v-model="email"
      />
      <button @click="submitEmail" :class="{ disabled: email === '' }">
        SUBMIT
      </button>
    </article>
    <h3 
      :class="{error: message.includes('Required'),
      success: message.includes('Success')}"
    >
      {{ message }}
    </h3>
  </section>
</template>

<script>
import { getSaved } from '../apiCalls.js'
export default {
  data() {
    return {
      email: '',
      message: ''
    }
  },
  methods: {
    async submitEmail() {
      if (this.isInvalid) {
        this.message = 'Please enter a valid email address to continue. Required: @ Required: . '
        this.email = ''
        return 
      }
      await this.$store.commit('storeEmail', this.email);
      this.message = `Success! ${this.$store.state.email} has been saved.`
      const fetchedSavedParks = await getSaved(this.$store.state.email)
      this.$store.commit('saveParks', fetchedSavedParks)
      setTimeout(() => this.$store.commit('changeToSearch'), 2000);
    }
  },
  computed: {
    isInvalid() {
      return !this.email.includes('@') || !this.email.includes('.')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_mixins.scss';

button {
  @include button-main-style;
}

input {
  padding: 0.5em;
  margin: 0.5em;
}

button.disabled {
  background-color: darkgray;
}

.disabled {
  pointer-events: none;
}

.error {
  color: red;
}

.success {
  color: green;
}
</style>