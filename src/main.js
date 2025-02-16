import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import Footer from './components/Footer.vue'


const app = createApp(App)

app.component('Footer', Footer)

app.use(router)

app.mount('#app')
