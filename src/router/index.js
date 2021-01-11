import Vue from 'vue';
import VueRouter from 'vue-router';
import TheHome from '../views/TheHome.vue';
import ResultsContainer from '../views/ResultsContainer.vue';
import ResultsItemDetails from '../components/ResultsItemDetails.vue'
import MyParks from '../components/MyParks.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: TheHome,
  },
  {
    path: '/results',
    name: 'Results',
    component: ResultsContainer,
  },
  {
    path: '/results/:name',
    name: 'ResultsItemDetails',
    component: ResultsItemDetails
  },
  {
    path: '/my-parks',
    name: 'MyParks',
    component: MyParks
  }
];

const router = new VueRouter({
  routes,
});

export default router;
