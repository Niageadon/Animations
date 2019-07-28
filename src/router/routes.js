
const routes = [
  { path: '/Authentication', component: () => import('pages/system/authentication.vue') },
  { path: '/', component: () => import('pages/CSSAnimation/CardFlip/index.vue') }

]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
