import { shallowMount, createLocalVue } from '@vue/test-utils'
import Directions from '@/components/Directions.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import { getDirections } from '../../src/apiCalls.js'
jest.mock('../../src/apiCalls.js')

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)
const router = new VueRouter()

describe('Directions', () => {
  let propsData, store, directions

  beforeEach(() => {
    getDirections.mockResolvedValue({
      narratives: [
        'Start here',
        'Turn left',
        'Merge onto highway',
        'Take exit 8',
        'Destination is on the left'
      ]
    })
    
    propsData = {
      park: {
        formatted_address: 'Address',
        geometry: {
          location: {
            lat: 39.8846317,
            lng: -105.1379952
          },
        name: 'Park Name',
        opening_hours: {
          open_now: true
        },
        photos: [],
        rating: 4.9
        } 
      }
    }

    store = new Vuex.Store({
      state: {
        geolocation: {
          latitude: 38.9865120,
          longitude: -105.4524687
        }
      }
    })

    directions = shallowMount(Directions, {
      localVue,
      store,
      directions,
      router,
      propsData  
    })
  })

  it('should render Directions', () => {
    expect(directions.exists()).toBe(true)
  })
})

