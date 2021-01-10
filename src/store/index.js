import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    savedParks: []
  },
  mutations: {
    savePark (state, newPark) {
      state.savedParks = [...state.savedParks, newPark]
    }
  },
  actions: {
  },
  modules: {
  }
})
