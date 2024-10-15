import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/login.vue'; 
import Register from '@/views/register.vue';

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

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
