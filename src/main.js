import { createApp } from 'vue'
import App from './App.vue' 
import router from './router'
import './assets/styles/reset.scss'
import './assets/styles/style.css'

const app = createApp(App)

app.use(router).mount('#app')
