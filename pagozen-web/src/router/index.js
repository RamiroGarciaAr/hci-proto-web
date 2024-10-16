import Contact from '@/views/(dashboard)/contacts/index.vue';
import Home from '@/views/(dashboard)/home/index.vue';
import Dashboard from '@/views/(dashboard)/layout.vue';
import Login from '@/views/login.vue';
import Register from '@/views/register.vue';

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    
  {
    path: '/',
    name: 'Login',
    component: Login, 
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'contacts',
        name: 'Contacts',
        component: Contact
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
