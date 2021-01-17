import { shallowMount, createLocalVue } from '@vue/test-utils'
import TheHeader from '@/components/TheHeader.vue'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('TheHeader', () => {
  let header;
  
  beforeEach(() => {
    header = shallowMount(TheHeader, {localVue, router})
  })

  it('should mount TheHeader component', () => {
    expect(header.exists()).toBe(true)
  })

  it('should render all expected elemenets', () => {
    expect(header.find('section').isVisible()).toBeTruthy()
    expect(header.find('.bone-yard-logo').isVisible()).toBeTruthy()
    expect(header.find('nav').text()).toBe('Search My Parks View Results')
    expect(header.find('h1').text()).toBe('TheBone Yard')
  })
})