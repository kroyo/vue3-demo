import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import routes from './router'

import './assets/styles/reset.scss'
import './assets/styles/base.scss'
import './assets/styles/style.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

const app = createApp(App)

app.use(router)

app.mount('#app')
