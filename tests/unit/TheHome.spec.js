import { mount, createLocalVue } from '@vue/test-utils'
import TheHome from '@/views/TheHome.vue'
import Email from '@/components/Email.vue'
import FindPark from '@/components/FindPark.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)
const router = new VueRouter()

describe('TheHome', () => {
  it('should mount TheHome with Email', () => {
    let store = {
      state: {
        homeChildComp: 'Email'
      }
    }
    const home = mount(TheHome, {localVue, router, store})
    expect(home.exists()).toBe(true)
    expect(home.findComponent(Email).exists()).toBe(true)
    expect(home.findComponent(FindPark).exists()).toBe(false)
    expect(home.find('.puppy-picture').isVisible()).toBeTruthy
    expect(home.find('h2').text()).toBe('Find your pup a new park to bark all over')
    expect(home.find('h1').text()).toBe('Enter your email to get started!') 
    expect(home.find('input').attributes('placeholder')).toBe('example@gmail.com') 
    expect(home.find('.disabled').isVisible()).toBeTruthy() 
  })

  it('should mount TheHome with FindPark', () => {
    let store = {
      state: {
        homeChildComp: 'FindPark'
      }
    }
    const home = mount(TheHome, {localVue, router, store}) 
    const allh2tags = home.findAll('h2')
    expect(allh2tags.at(1).text()).toBe('Let\'s Go Play!')
    expect(home.findComponent(Email).exists()).toBe(false)
    expect(home.findComponent(FindPark).exists()).toBe(true)
  })
})