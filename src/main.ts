import { createApp, vaporInteropPlugin } from 'vue'
import './style.css'
import App from './App.vue'

// Create app with Vapor mode optimizations
const app = createApp(App)
app.use(vaporInteropPlugin)
app.mount('#app')
