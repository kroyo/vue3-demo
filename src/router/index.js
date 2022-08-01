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
  }
]

export default routes