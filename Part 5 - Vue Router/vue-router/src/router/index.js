import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Recruiters from '../views/recruiters/Recruiters.vue'
import RecruiterDetails from '../views/recruiters/RecruiterDetails.vue'
import Job from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Job,
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true,
  },
  {
    path: '/recruiters',
    name: 'Recruiters',
    component: Recruiters,
  },
  {
    path: '/recruiters/:id',
    name: 'RecruiterDetails',
    component: RecruiterDetails,
    props: true,
  },
  // Redirects
  {
    path: '/all-jobs',
    redirect: '/jobs',
  },

  // Catch-All 404
  {
    path: '/:catchAll(.*)',
    name: '/NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
