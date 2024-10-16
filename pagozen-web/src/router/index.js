import Contact from '@/views/(dashboard)/contacts/index.vue';
import Home from '@/views/(dashboard)/home/index.vue';
import Dashboard from '@/views/(dashboard)/layout.vue';
import Authentication from '@/views/(authentication)/layout.vue'
import Login from '@/views/(authentication)/login.vue';
import Register from '@/views/(authentication)/register.vue';

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    
  {
    path: '/authentication',
    name: 'Authentication',
    component: Authentication,
    children: [
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/register',
        name: 'Register',
        component: Register
      },
    ] 
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
