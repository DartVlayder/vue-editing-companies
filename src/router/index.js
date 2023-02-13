import { createRouter, createWebHashHistory } from 'vue-router'
import ListUsers from '../views/ListUsers.vue'
import UserProfile from '../views/UserProfile.vue'

const routes = [
  {
    path: '/',
    name: 'List',
    component: ListUsers
  },
  {
    path: '/User',
    name: 'User',
    component: UserProfile
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
