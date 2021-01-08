import { mount } from '@vue/test-utils'
import ResultsListItem from '@/components/ResultsListItem.vue'

describe('ResultsListItem', () => {
  it('renders ResultsListItem component', () => {
    const resultsListItem = mount(ResultsListItem)
    expect(resultsListItem.exists()).toBe(true)
  })
})