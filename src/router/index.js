import { createRouter, createWebHistory } from 'vue-router'
let Home = () => import('../views/home/Home-t')
let About = () => import('../views/about/About-t')
let routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]
let router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
