import { mount } from '@vue/test-utils';
import FindPark from '@/components/FindPark.vue';
window.Vue = require('vue');

describe('FindPark', () => {
  it('renders FindPark component', () => {
    const findPark = mount(FindPark);
    expect(findPark.exists()).toBe(true);
  });
});
