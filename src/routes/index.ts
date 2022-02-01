import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
  ],
});
export default routes;
export { routes };
