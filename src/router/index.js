import { createRouter, createWebHashHistory } from 'vue-router'
const Home = () => import(/* webpackChunkName: "Home" */ '../pages/Home.vue');
const About = () => import(/* webpackChunkName: "About" */ '../pages/About.vue');
const Charts = () => import(/* webpackChunkName: "Charts" */ '../pages/Charts/Charts.vue');
const Fanye = () => import(/* webpackChunkName: "Fanye" */ '../pages/Fanye.vue');
const Bagua = () => import(/* webpackChunkName: "Fanye" */ '../pages/Bagua.vue');
const App = () => import(/* webpackChunkName: "App" */  '../app.vue');
const echarts = () => import(/* webpackChunkName: "App" */  '../echarts.vue');
// echarts Test
const a = () => import(/* webpackChunkName: "a" */'../pages/a.vue');
const draw = () => import(/* webpackChunkName: "a" */'../pages/draw.vue');
const pubu = () => import(/* webpackChunkName: "a" */'../pages/pubu.vue');
const routes = [
  {
    path: '/', //这个表示的是根目录，即一进入的页面
    component: pubu  //设置页面一进来就显示的页面，即重定向到goods组件，这里写的内容是对应组将的component的值
  },
  { path: '/a', component: a },
  { path: '/draw', component: draw },
  { path: '/home', component: Home },
  { path: '/charts', component: Charts },
  { path: '/fanye', component: Fanye },
  { path: '/bagua', component: Bagua },
  { path: '/about', component: About },
  { path: '/echarts', component: echarts },
  { path: '/App', component: App }
]
const router = createRouter({
  // 配置路由和组件之间的应用关系
  history: createWebHashHistory(),
  routes
})

export default router