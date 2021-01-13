<template>
  <section>
    <h1>Enter your email to get started!</h1>
    <article v-if="message !== 'Success!'">
      <input 
        type='email' 
        aria-label="Type your email here"
        placeholder="example@gmail.com"
        v-model="email"
      />
      <button @click="submitEmail">
        SUBMIT
      </button>
    </article>
    <h3 :class="{error: message.includes('Required'), success: message.includes('Success')}">{{ message }}</h3>
  </section>
</template>

<script>

export default {
  data() {
    return {
      email: '',
      message: ''
    }
  },
  methods: {
    submitEmail() {
      if (this.isInvalid) {
        this.message = 'Please enter a valid email address to continue. Required: @ Required: . '
        this.email = ''
        return 
      } 
      this.message = 'Success!'
      this.$store.commit('storeEmail', this.email);
    }
  },
  computed: {
    isInvalid() {
      return this.email === '' || !this.email.includes('@') || !this.email.includes('.')
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

.error {
  color: red;
}

.success {
  color: green;
}
</style>