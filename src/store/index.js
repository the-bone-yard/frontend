import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    savedParks: [],
    searchResults: [],
    geolocation: null,
    email: ''
  },
  mutations: {
    savePark (state, newPark) {
      state.savedParks = [...state.savedParks, newPark]
    },
    storeResults (state, results) {
      state.searchResults = results
    },
    updateGeolocation (state, geolocation) {
      state.geolocation = geolocation
    },
    storeEmail (state, email) {
      state.email = email
    },
    clearResults (state) {
      state.searchResults = []
    }
  },
  actions: {
  },
  modules: {
  }
})
