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
	});
});
