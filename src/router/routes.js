
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'carrera', component: () => import('pages/Carrera.vue') },
      { path: 'cuatrimestres', component: () => import('pages/Cuatrimestre.vue') },
      { path: 'notas', component: () => import('pages/Notas.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
