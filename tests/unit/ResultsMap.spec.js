import { shallowMount, createLocalVue } from '@vue/test-utils'
import ResultsMap from '@/components/ResultsMap.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)
const router = new VueRouter()

describe('ResultsMap', () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store ({
      state: {
        geolocation: {
          coords: {
            latitude: 46,
            longitude: -103
          }
        }  
      }
    })   
  })

  it('should render ResultsMap', () => {
    const map = shallowMount(ResultsMap, {localVue, router, store})
    expect(map.exists()).toBe(true)
    const p = map.find('p')
    expect(p.text()).toBe('Zoom out on map to ensure all result markers are visible.')
    expect(map.find('.gmap-map').exists()).toBe(true)
  })
})