import Vue from 'vue'
import VueRouter from 'vue-router'
import TheHome from '../views/TheHome.vue'
import ResultsContainer from '../views/ResultsContainer.vue'
import ResultsItemDetails from '../components/ResultsItemDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: TheHome
  },
  {
    path: '/results',
    name: 'Results',
    component: ResultsContainer
  },
  {
    path: '/results/item-details',
    name: 'ItemDetails',
    component: ResultsItemDetails
  }
  //this path for item details will need to be dynamic
]

const router = new VueRouter({
  routes
})

export default router
