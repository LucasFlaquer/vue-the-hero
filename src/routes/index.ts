import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Cases from '../views/ListCases.vue';

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/cases',
      name: 'cases',
      component: Cases,
    },
  ],
});
export default routes;
export { routes };
