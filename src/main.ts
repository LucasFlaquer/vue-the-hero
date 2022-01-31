import { routes } from './routes';
import { createApp } from "vue";
import App from "./App.vue";

import "./index.css";
createApp(App)
  .use(routes)
  .mount("#app");
