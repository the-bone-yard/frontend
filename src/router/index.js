import Vue from 'vue'
import VueRouter from 'vue-router'
import TheHome from '../views/TheHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: TheHome
  }
]

const router = new VueRouter({
  routes
})

export default router
