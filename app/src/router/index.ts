import MetersPage from '@/pages/MetersPage.vue'
import WelcomePage from '@/pages/WelcomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: WelcomePage },
    { path: '/meters', component: MetersPage },
  ],
})

export default router
