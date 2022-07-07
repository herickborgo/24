import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/components/layout/default-layout.vue'),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
      },
      {
        path: 'recovery-password',
        name: 'RecoveryPassword',
        component: () => import('@/views/RecoveryPassword.vue'),
      },
      {
        path: 'service-orders',
        name: 'ServiceOrders',
        component: () => import('@/views/ServiceOrders/List.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from) => {
// });

export default router;
