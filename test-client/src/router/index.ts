import { createRouter, createWebHistory } from 'vue-router'
import about from '../pages/about.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router