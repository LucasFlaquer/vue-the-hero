import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Cases from '../views/ListCases.vue';
import CreateCase from '../views/CreateCase.vue';

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
    {
      path: '/cases/create',
      name: 'cases-create',
      component: CreateCase,
    },
  ],
});
export default routes;
export { routes };
