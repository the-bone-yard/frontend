import { shallowMount, createLocalVue } from '@vue/test-utils';
import ResultsItemDetails from '@/components/ResultsItemDetails.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('ResultsItemDetails', () => {
  let state, store, computed;
  beforeEach(() => {
    state = {
      savedParks: [],
      searchResults: [],
      geolocation: null
    }

    store = new Vuex.Store({
      state
    })

    computed = {
      park: {  
        formatted_address: "5123-5275 Valmont Rd, Boulder",
        geometry: {},
        name: "Valmont Dog Park",
        opening_hours: {open_now: false},
        photos: [{}],
        rating:4.7        
      }
    }
  })

  test('should render the component', () => {
    const wrapper = shallowMount(ResultsItemDetails, { store, localVue, computed })
    expect(wrapper.exists()).toBe(true)
  })
})