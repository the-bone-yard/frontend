import { mount, createLocalVue } from '@vue/test-utils';
import FindPark from '@/components/FindPark.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('FindPark', () => {
  let state;
  let store;

  beforeEach(() => {
    state = {
      geolocation: null,
    };
    store = new Vuex.Store({
      state,
    });
  });

  it('renders FindPark component', () => {
    const wrapper = mount(FindPark, { store, localVue });
    expect(wrapper.exists()).toBe(true);
  });

  it('should render search button and input field on load', () => {
    const wrapper = mount(FindPark, { store, localVue });
    expect(wrapper.find('button').text()).toBe('Find a dog park near me!');
    expect(wrapper.find('input').exists()).toBe(true);
  });

  it('should accept user input', async () => {
    const wrapper = mount(FindPark, {
      store,
      localVue,
      propsData: { searchTerm: '' },
    });
    const input = wrapper.find('input');
    await input.setValue('Erie, CO');
    expect(input.element.value).toBe('Erie, CO');
  });

  // const getAllBtnTags = wrapper.findAll('button');
  // expect(getAllBtnTags.at(1).text()).toBe('Get Started - woof!');

  // it('should fire searchByLocation when near me button is clicked', async () => {
  //   await wrapper.find('#location').trigger('click');
  //   expect(searchByLocation).toHaveBeenCalled();
  // });

  // it('should fire search when get started button is clicked', () => {
  //   wrapper.find('#search-button').trigger('click');
  //   expect(setSearchTerm).toHaveBeenCalled();
  // });
});
