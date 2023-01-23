import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import lazyPlugin from "vue3-lazy";
import './assets/scss/index.scss'
import lazyLoadPng from '@/components/header/logo@3x.png'
import loadingDirective from "@/components/base/loading/directive";
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin, {
	loading: lazyLoadPng
})
app.directive("loading", loadingDirective)

app.mount('#app')
