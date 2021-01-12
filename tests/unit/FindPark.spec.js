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

  it('should render headings on load', () => {
    const wrapper = mount(FindPark, { store, localVue });
    expect(wrapper.find('h2').text()).toBe("Let's Go Play!");
    expect(wrapper.find('h3').text()).toBe('--Or--');
  });

  it('should disable Find Parks Near Me button if geolocation is inactive', () => {
    const wrapper = mount(FindPark, { store, localVue });
    expect(wrapper.find('.disabled').exists()).toBe(true);
  });

  it('should render search button and input field with active geolocation', () => {
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

  it('should not render a search button without user input', () => {
    const wrapper = mount(FindPark, { store, localVue });
    expect(wrapper.find('#search').exists()).toBe(false);
  });

  it('should render search button based on user input', () => {
    const wrapper = mount(FindPark, {
      store,
      localVue,
      data() {
        return {
          searchTerm: 'Erie, CO',
        };
      },
    });

    expect(wrapper.find('#search').exists()).toBe(true);
    expect(wrapper.find('#search').text()).toBe('Get Started - woof!');
  });

  it('should fire searchByLocation when near me button is clicked', async () => {
    const wrapper = mount(FindPark, { store, localVue });
    wrapper.setMethods({ searchByLocation: jest.fn() });
    await wrapper.find('#location').trigger('click');
    expect(wrapper.vm.searchByLocation).toHaveBeenCalled();
  });
});
