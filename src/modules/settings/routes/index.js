export default [
  {
    path: '/admin/settings',
    component: () => import('../views/index.vue'),
    meta: {
      title: 'ATech - Configurações',
      requiresAuth: true
    },
    children: [
      {
        path: '/usuarios',
        name: 'settings.users',
        component: () => import('../modules/users/views/index.vue')
      },
      {
        path: '/usuarios/adicionar',
        name: 'settings.users.add',
        component: () => import('../modules/users/views/Create.vue')
      }
    ]
  }
]
