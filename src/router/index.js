import { createRouter, createWebHistory } from 'vue-router'
import RegistroView from '../views/RegistroView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Registro',
      component: RegistroView
    },
    {
      path: '/loging',
      name: 'loging',
      
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/contenido',
      name: 'contenido',
      
      component: () => import('../views/contenidoView.vue')
    }
  ]
})

export default router
