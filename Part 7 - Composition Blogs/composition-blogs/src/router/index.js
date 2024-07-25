import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostDetails from '@/components/PostDetails.vue'
import Create from '@/views/Create.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/posts/:id',
    name: 'details',
    component: PostDetails,
    props: true,
  },
  {
    path: '/create',
    name: 'create',
    component: Create,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
