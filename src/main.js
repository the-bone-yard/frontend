import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

import * as VueGoogleMaps from 'vue2-google-maps';

export const bus = new Vue();

Vue.use(VueGoogleMaps, {
	load: {
		key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
		libraries: 'places',
	},
});

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
