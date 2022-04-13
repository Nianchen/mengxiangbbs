import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/index'
import {createPinia}  from 'pinia'
import STable from '@surely-vue/table';
import '@surely-vue/table/dist/index.less'
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(STable)
app.mount('#app')
