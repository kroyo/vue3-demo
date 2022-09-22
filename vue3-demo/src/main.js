import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue' 
import routes from './router'
import './assets/styles/reset.scss'
import './assets/styles/base.scss'
import './assets/styles/style.css'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
const app = createApp(App)

app.use(router).mount('#app')
