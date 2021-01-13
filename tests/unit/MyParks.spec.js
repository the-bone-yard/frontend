import { mount, createLocalVue } from '@vue/test-utils';
import MyParks from '@/components/MyParks.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('MyParks.vue', () => {
	let state;
	let store;
	beforeEach(() => {
		state = {
			savedParks: [],
		};

		store = new Vuex.Store({
			state,
		});
	});

	test('should render MyParks.vue', () => {
		const wrapper = mount(MyParks, { store, localVue });
		expect(wrapper.exists()).toBe(true);
		expect(wrapper.find('section').isVisible()).toBeTruthy();
		expect(wrapper.find('h1').text()).toBe('My Saved Parks')
	});

	test.skip('should render a saved park to the screen', () => {
    const $route = {
      path: '/my-parks'
    }
		state = {
			savedParks: [
				{
					formatted_address: '8270 Lexington Dr, Colorado Springs',
					geometry: {
						location: { lat: 38.952039, lng: -104.7748943 },
						viewport: {
							northeast: { lat: 38.95328347989272, lng: -104.7738461701073 },
							southwest: { lat: 38.95058382010728, lng: -104.7765458298927 },
						},
					},
					name: 'Rampart Dog Park',
					opening_hours: { open_now: true },
					photos: [
						{
							height: 2988,
							html_attributions: [
								'<a href="https://maps.google.com/maps/contrib/115566010039288396420">Melodie Marvel</a>',
							],
							photo_reference:
								'ATtYBwKlEoKnkz5JXr2PXbPZ6hkKSQi1vghFDNriwfubSuyxs1CnwgUwMfjXpn4KOOo3sjFqQxGxmwQwx07MiT-apmrrz20QEpBFSA7SWjm4iysxJbiEzhpi6hS3QZzjxUmv_T6z2H4cZcrDRXS404uoQ1cF3M-59L_ExteZXRRaMLirLiDj',
							width: 5312,
						},
					],
					rating: 4.4,
				},
			],
		};
		store = new Vuex.Store({
			state,
		});
    const wrapper = mount(MyParks, { 
      store, 
      localVue,
      mocks: {
        $route
      },
    });
    const getAllH1Tags = wrapper.findAll('h1');
    const getAllPTags = wrapper.findAll('p');
    expect(getAllH1Tags.at(1).text()).toBe('Rampart Dog Park');
    expect(getAllH1Tags.at(2).text()).toBe('8270 Lexington Dr, Colorado Springs');
    expect(getAllPTags.at(0).text()).toBe('This park is open');
    expect(getAllPTags.at(1).text()).toBe('Rating: 4.4');
    expect(wrapper.find('button').text()).toBe('DETAILS');
  });
  
  test('should render a message when a user has no parks saved', () => {
    const wrapper = mount(MyParks, { store, localVue });
    expect(wrapper.find('h2').text()).toBe('Sign in with your email to view your saved parks.');
  });
});
