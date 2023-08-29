import { createRouter, createWebHistory } from 'vue-router';

import login from '@/modules/auth/views/login.vue';
import Index from '../views/pages/mainmenu/Dashboard/indexdashboard/Index';
import settingsRoutes from '@/modules/settings/routes/index.js';

const routes = [
  ...settingsRoutes,
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/index',
    name: 'Index',
    component: Index,
  },
];

export const router = createRouter({
  history: createWebHistory('/atech/'),
  linkActiveClass: 'active',
  routes,
});
