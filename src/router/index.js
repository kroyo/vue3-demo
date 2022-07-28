import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [ 
  {
    path: '/',
    redirect(to) {
      return '/home'
    }
  },
  {
    name: 'home',
    path: '/home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home.vue') 
  },
  {
    name: 'setup',
    path: '/setup',
    component: () => import(/* webpackChunkName: "home" */ '@/views/api-example/setup.vue') 
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router