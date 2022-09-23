const routes = [
  {
    path: '/',
    isSlider: false,
    redirect() {
      return '/home'
    }
  },
  {
    path: '/home',
    name: 'home',
    isSlider: true,
    component: () => import('@/views/HomeView.vue')
  },
  {
    name: 'setup',
    path: '/setup',
    isSlider: true,
    component: () => import('@/views/api-example/setup.vue') 
  },
  {
    name: 'reactiveRef',
    path: '/reactiveRef',
    isSlider: true,
    component: () => import('@/views/api-example/reactive-and-ref.vue') 
  },
  {
    name: 'TodoList',
    path: '/todoList',
    isSlider: true,
    component: () => import('@/views/todo-list/index.vue') 
  }
]

export default routes
