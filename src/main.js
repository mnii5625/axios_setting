import { createApp } from 'vue'
import App from './App.vue'
import router from './js/router'
import axios from './js/axios'
import store from './js/store'

const app = createApp(App);

app.provide('$axios', axios);
app.use(store).use(router).mount('#app');
