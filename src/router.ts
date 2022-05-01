import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import FormPage from './views/FormPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      component: HomePage
    },
    {
      path: '/form',
      component: FormPage
    }
  ]
})

export default router
