import { mount } from '@vue/test-utils';
import FindPark from '@/components/FindPark.vue';
window.Vue = require('vue');

describe('FindPark', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(FindPark, {});
  });
  it('renders FindPark component', () => {
    // const findPark = mount(FindPark);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render a search button', () => {
    // const wrapper = mount(FindPark, {});
    expect(wrapper.html()).toContain('Find a dog park near me!');
    expect(wrapper.html()).toContain('Get Started - woof!');
  });

  it('should fire searchByLocation when near me button is clicked', () => {
    // const wrapper = mount(FindPark);
    const searchByLocation = jest.fn();
    wrapper.setMethods({
      searchByLocation: searchByLocation,
    });
    wrapper.find('#location').trigger('click');

    expect(searchByLocation).toHaveBeenCalled();
  });

  it('should fire search when get started button is clicked', () => {
    // const wrapper = mount(FindPark);
    const setSearchTerm = jest.fn();
    wrapper.setMethods({
      setSearchTerm: setSearchTerm,
    });
    wrapper.find('#search-button').trigger('click');

    expect(setSearchTerm).toHaveBeenCalled();
  });
});
