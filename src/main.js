import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VScaleScreen from 'v-scale-screen'
import { createPinia } from 'pinia'
// function loadJScript () {
//   var script = document.createElement("script");
//   script.type = "text/javascript";
//   script.src = "https://api.map.baidu.com/api?v=3.0&ak=IhCDX4yC7IspWYSkKfTc6WTNPFWUB6AA&callback=init";
//   document.body.appendChild(script);
// }
// loadJScript();
createApp(App).use(ElementPlus).use(createPinia()).use(router).use(VScaleScreen).mount('#app')