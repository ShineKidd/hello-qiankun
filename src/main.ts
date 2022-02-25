import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const router = createRouter({
  history: createWebHistory('/'),
  routes: []
})
createApp(App).use(router).use(Antd).mount('#app')


import { registerMicroApps, SandBoxType, start } from 'qiankun';

registerMicroApps([
  {
    name: 'react app', // app name registered
    entry: 'http://localhost:3001',
    container: '#app-container',
    activeRule: '/react-app',
    loader(loading) { console.log(loading) }
  },
  {
    name: 'vue app',
    entry: 'http://localhost:3002',
    container: '#app-container',
    activeRule: '/vue-app',
  },
  {
    name: 'vite app',
    entry: 'http://localhost:3003',
    container: '#app-container',
    activeRule: '/vite-app',
  },
], {
  beforeLoad: async (app) => console.log('before load', app.name),
  beforeMount: [async (app) => console.log('before mount', app.name)],
},);

start({ sandbox: true, excludeAssetFilter(url) {
  alert()
  console.log(url)
  if (url.includes('//at.alicdn.com/t/font')) return true
  return false
} });