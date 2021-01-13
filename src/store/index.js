import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    savedParks: [],
    searchResults: [],
    geolocation: null,
    email: '',
    homeChildComp: 'Email'
  },
  mutations: {
    saveParks (state, savedParksFromApi) {
      state.savedParks = savedParksFromApi
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
    },
    changeToSearch (state) {
      state.homeChildComp = 'FindPark'
    }
  },
  actions: {
  },
  modules: {
  }
})
