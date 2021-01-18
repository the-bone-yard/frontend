import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import ResultsContainer from '@/views/ResultsContainer.vue'
import ResultsList from '@/components/ResultsList.vue'
import ResultsMap from '@/components/ResultsMap.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)
const router = new VueRouter()

describe('ResultsContainer happy paths', () => {
  let store;
  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        searchResults: [
            {
                formatted_address: '8270 Lexington Dr, Colorado Springs',
                geometry: {
                    location: { lat: 38.952039, lng: -104.7748943 },
                    viewport: {
                        northeast: { lat: 38.95328347989272, lng: -104.7738461701073 },
                        southwest: { lat: 38.95058382010728, lng: -104.7765458298927 },
                    },
                },
                name: 'Rampart Dog Park',
                opening_hours: { open_now: true },
                photos: [
                    {
                        height: 2988,
                        html_attributions: [
                            '<a href="https://maps.google.com/maps/contrib/115566010039288396420">Melodie Marvel</a>',
                        ],
                        photo_reference:
                            'ATtYBwKlEoKnkz5JXr2PXbPZ6hkKSQi1vghFDNriwfubSuyxs1CnwgUwMfjXpn4KOOo3sjFqQxGxmwQwx07MiT-apmrrz20QEpBFSA7SWjm4iysxJbiEzhpi6hS3QZzjxUmv_T6z2H4cZcrDRXS404uoQ1cF3M-59L_ExteZXRRaMLirLiDj',
                        width: 5312,
                    },
                ],
                rating: 4.4,
            },
        ]
      }
    })
  })

  it('should render ResultsContainer', () => {
    const results = shallowMount(ResultsContainer, {localVue, router, store})
    expect(results.exists()).toBe(true)
    const allButtons = results.findAll('button')
    expect(allButtons.at(0).text()).toBe('List View')
    expect(allButtons.at(1).text()).toBe('Map View')
    expect(allButtons.exists()).toBe(true)
  })

  it('should render the ResultsList by default', () => {
    const results = shallowMount(ResultsContainer, {localVue, router, store})
    expect(results.findComponent(ResultsList).exists()).toBe(true)
    expect(results.findComponent(ResultsMap).exists()).toBe(false) 
    const allButtons = results.findAll('button')
    expect(allButtons.at(0).attributes('class')).toBe('active')
  })

  it('should render the correct child component on button click', async () => {
    const results = shallowMount(ResultsContainer, {localVue, router, store})
    const allButtons = results.findAll('button')
    await allButtons.at(1).trigger('click')
    expect(allButtons.at(1).attributes('class')).toBe('active')
    expect(results.findComponent(ResultsList).exists()).toBe(false) 
    expect(results.findComponent(ResultsMap).exists()).toBe(true) 
    await allButtons.at(0).trigger('click')
    expect(allButtons.at(0).attributes('class')).toBe('active')
    expect(results.findComponent(ResultsList).exists()).toBe(true) 
    expect(results.findComponent(ResultsMap).exists()).toBe(false)
  })
})

describe('ResultsContainer sad path', () => {
  it('should not render any buttons if no results exist', () => {
    const store = new Vuex.Store({
      state: {
        searchResults: []
      }
    })
    const results = shallowMount(ResultsContainer, {localVue, router, store})
    let allButtons = results.findAll('button')
    expect(allButtons.exists()).toBe(false) 
  })  
})