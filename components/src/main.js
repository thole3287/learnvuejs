import './assets/main.css'
import { createApp, readonly } from 'vue'
import App from './App.vue'
import router from './router'
import GlobalComponent from './components/GlobalComponent.vue'

const app = createApp(App)

app.component('global-component', GlobalComponent)

app.provide('message', readonly('Hello from main.js'))


app.use(router)


app.mount('#app')
