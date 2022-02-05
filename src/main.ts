import { createApp } from 'vue';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import { routes } from './routes';
import App from './App.vue';
import './index.css';
import { makeServer } from './server';
import { toastPlugin } from './plugins/ToastPlugin';

if (import.meta.env.DEV) {
  makeServer();
}

createApp(App).use(Toast).use(toastPlugin).use(routes).mount('#app');
