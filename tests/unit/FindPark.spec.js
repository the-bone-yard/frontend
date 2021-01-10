import { mount } from '@vue/test-utils';
import FindPark from '@/components/FindPark.vue';
window.Vue = require('vue');

describe('FindPark', () => {
  it('renders FindPark component', () => {
    const findPark = mount(FindPark);
    expect(findPark.exists()).toBe(true);
  });

  it('should render a search button', () => {
    const wrapper = mount(FindPark, {});
    expect(wrapper.html()).toContain('Find a dog park near me!');
    expect(wrapper.html()).toContain('Get Started - woof!');
  });
});
