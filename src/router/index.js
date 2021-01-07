import Vue from 'vue';
import VueRouter from 'vue-router';
import TheHome from '../views/TheHome.vue';
import ResultsContainer from '../views/ResultsContainer.vue';
import FindPark from '../views/FindPark.vue';

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
    path: '/findpark',
    name: 'Find Park',
    component: FindPark,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
