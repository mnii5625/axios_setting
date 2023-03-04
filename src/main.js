import { createApp } from 'vue'
import App from './App.vue'
import router from './js/router'
import axios from './js/axios'

const app = createApp(App);

app.provide('$axios', axios);
app.use(router).mount('#app');
