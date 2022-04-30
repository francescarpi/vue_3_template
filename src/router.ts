import { createRouter, createWebHistory } from 'vue-router'
import homePage from './views/homePage.vue'
import formPage from './views/formPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      component: homePage
    },
    {
      path: '/form',
      component: formPage
    }
  ]
})

export default router
