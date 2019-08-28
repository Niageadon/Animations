
const routes = [
  { path: '/Authentication', component: () => import('pages/system/authentication.vue') },
  { path: '/CSS/card-flip', component: () => import('pages/CSSAnimation/CardFlip/index.vue') },
  { path: '/CSS/cube-flip', component: () => import('pages/CSSAnimation/CubeFlip/index.vue') },
  // CSS property
  { path: '/CSS-property/transform-origin', component: () => import('pages/CSSProperties/transform-origin.vue') }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
