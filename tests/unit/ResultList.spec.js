import { mount } from '@vue/test-utils'
import ResultsList from '@/components/ResultsList.vue'
window.Vue = require('vue');

describe('ResultsList', () => {
  it.skip('renders ResultsList component', () => {
    const resultsList = mount(ResultsList)
    expect(resultsList.exists()).toBe(true)
  })
})