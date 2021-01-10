import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    savedParks: [],
    searchResults: [],
    geolocation: null
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
    }
  },
  actions: {
  },
  modules: {
  }
})
