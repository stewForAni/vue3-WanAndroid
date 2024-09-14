import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from './network/index.js'

const app = createApp(App)

app.config.globalProperties.$http = axios

document.documentElement.style.fontSize = '10px'

app.use(router)

app.mount('#app')
