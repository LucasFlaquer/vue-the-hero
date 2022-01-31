

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

export const routes = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: "home",
      component: Home
    }
  ]
})