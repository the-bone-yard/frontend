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

describe('Directions happy path', () => {
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
        router,
        propsData  
    })
  })

  it('should render Directions', () => {
    expect(directions.exists()).toBe(true)
    const allPTags = directions.findAll('p')
    expect(allPTags.at(0).text()).toBe('Start here')
    expect(allPTags.at(1).text()).toBe('Turn left')
    expect(allPTags.at(2).text()).toBe('Merge onto highway')
    expect(allPTags.at(3).text()).toBe('Take exit 8')
    expect(allPTags.at(4).text()).toBe('Destination is on the left')
  })
})

describe('Directions sad path', () => {
  it('should show a message if there are no directions', () => {
    getDirections.mockResolvedValue({narratives: []})
    
    const propsData = {
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
  
      const store = new Vuex.Store({
        state: {
          geolocation: {
            latitude: 38.9865120,
            longitude: -105.4524687
          }
        }
      })
  
      const directions = shallowMount(Directions, {
          localVue,
          store,
          router,
          propsData  
      }) 
      
    expect(directions.exists()).toBe(true)
    expect(directions.find('p').text()).toBe('No directions available.')
  })
})

