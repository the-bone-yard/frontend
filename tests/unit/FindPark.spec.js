import { mount } from '@vue/test-utils';
import FindPark from '@/components/FindPark.vue';
window.Vue = require('vue');

describe('FindPark', () => {
  let wrapper;
  const searchByLocation = jest.fn();
  const setSearchTerm = jest.fn();

  beforeEach(() => {
    wrapper = mount(FindPark, {
      propsData: {
        searchByLocation,
        setSearchTerm,
      },
    });
  });
  it('renders FindPark component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render search buttons', () => {
    expect(wrapper.html()).toContain('Find a dog park near me!');
    expect(wrapper.html()).toContain('Get Started - woof!');
  });

  it('should render an input field', () => {
    expect(wrapper.find('input').exists()).toBe(true);
  });

  // it('should fire searchByLocation when near me button is clicked', async () => {
  //   await wrapper.find('#location').trigger('click');
  //   expect(searchByLocation).toHaveBeenCalled();
  // });

  // it('should fire search when get started button is clicked', () => {
  //   wrapper.find('#search-button').trigger('click');
  //   expect(setSearchTerm).toHaveBeenCalled();
  // });
});
