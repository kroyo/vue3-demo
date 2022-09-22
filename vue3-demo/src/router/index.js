const routes = [ 
  {
    path: '/',
    isSlider: false,
    redirect(to) {
      return '/home'
    }
  },
  {
    name: 'home',
    path: '/home',
    isSlider: true,
    component: () => import('@/views/home.vue') 
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
    name: 'refToRef',
    path: '/refToRef',
    isSlider: true,
    component: () => import('@/views/api-example/ref-and-toref.vue') 
  },
  {
    name: 'shallowReactive',
    path: '/shallowReactive',
    isSlider: true,
    component: () => import('@/views/api-example/shallow-reactive.vue') 
  },
  {
    name: 'shallowRef',
    path: '/shallowRef',
    isSlider: true,
    component: () => import('@/views/api-example/shallow-ref.vue') 
  },
  {
    name: 'toRaw',
    path: '/toRaw',
    isSlider: true,
    component: () => import('@/views/api-example/to-raw.vue') 
  },
  {
    name: 'markRaw',
    path: '/markRaw',
    isSlider: true,
    component: () => import('@/views/api-example/mark-raw.vue') 
  },
  {
    name: 'watch',
    path: '/watch',
    isSlider: true,
    component: () => import('@/views/api-example/watch.vue') 
  },
  {
    name: 'getCurrentInstance',
    path: '/getCurrentInstance',
    isSlider: true,
    component: () => import('@/views/api-example/getCurrentInstance.vue') 
  },
  {
    name: '获取标签元素',
    path: '/refs',
    isSlider: true,
    component: () => import('@/views/api-example/refs.vue') 
  },
  {
    name: 'TodoList',
    path: '/todoList',
    isSlider: true,
    component: () => import('@/views/todo-list/index.vue') 
  }
]

export default routes