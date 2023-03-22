import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getCurrentUser } from 'vuefire'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
     
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/LoginView.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('../views/RegisterView.vue')
      }
]
})
//check za usera
router.beforeEach(async (to) => {
  if (to.meta.requiresAuth){
    const currentUser = await getCurrentUser()
      if (!currentUser){
    
  return {
    path: '/login',
        query: { 
        redirect: to.fullPath,
          },
        }
      } }})

export default router