import { createApp } from 'vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'  
//import './style.css'
import App from './App.vue'
//createApp(App).mount('#app')
//引入element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from 'pinia'
import myConfirm from './utils/myConfirm'

const pinia = createPinia()

import router from './router/index'
const app = createApp(App);
app.use(ElementPlus, {
    locale: zhCn,}).use(router).use(pinia).mount('#app')

//全局注册图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

//全局注册
app.config.globalProperties.$myconfirm = myConfirm

//echarts
import * as echarts from 'echarts'
app.config.globalProperties.$echarts = echarts;
