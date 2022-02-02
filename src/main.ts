import { createApp } from 'vue';

import { routes } from './routes';
import App from './App.vue';
import './index.css';
import { makeServer } from './server';

if (import.meta.env.DEV) {
  makeServer();
}

createApp(App).use(routes).mount('#app');
