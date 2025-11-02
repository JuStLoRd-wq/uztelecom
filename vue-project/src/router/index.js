import { createRouter, createWebHistory } from 'vue-router'
import ApplicationView from '@/views/ApplicationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/submit-application',
      name: 'submit-application',
      component: ApplicationView,
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue'),
    },
    {
      path: '/opportunities',
      name: 'opportunities',
      component: () => import('../views/OpportunitiesView.vue'),
    },
    {
      path: '/advantages',
      name: 'advantages',
      component: () => import('../views/AdvantagesView.vue'),
    },
    {
      path: '/to-start',
      name: 'to-start',
      component: () => import('../views/TostartView.vue'),
    },
     {
      path: '/tarrifs',
      name: 'tarrifs',
      component: () => import('../views/TarrifsView.vue'),
    },
  ],
})

export default router
