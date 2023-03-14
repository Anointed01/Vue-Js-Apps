import { createApp } from 'vue'
import App from './App.vue'
import router from './assets/router.js'
import 'flowbite';
import './assets/style.css'


const app = createApp(App)
app.use(router)
app.mount('#app')

