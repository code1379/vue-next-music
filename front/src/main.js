import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import lazyPlugin from "vue3-lazy";
import './assets/scss/index.scss'
import lazyLoadPng from '@/components/header/logo@3x.png'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin, {
	loading: lazyLoadPng
})

app.mount('#app')
