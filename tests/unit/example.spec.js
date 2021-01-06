import { mount } from '@vue/test-utils'
import * as TheHeader from '@/components/TheHeader.vue'

describe('TheHeader', () => {
  it('renders TheHeader component', () => {
    const header = mount(TheHeader)
    expect(header.exists()).toBe(true)
  })
  //router-link is throwing an error but test is passing - look into this
})
