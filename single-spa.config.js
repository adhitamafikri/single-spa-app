import {
  registerApplication,
  start
} from 'single-spa'

registerApplication(
  'home',
  () => import('./src/react/main.app.js'),
  () => location.pathname === ''
    || location.pathname === '/'
    || location.pathname === '/home'
    || location.pathname === '/react',
)

registerApplication(
  'vue',
  () => import('./src/vue/vue.app.js'),
  () => location.pathname === '/vue',
)

start()
