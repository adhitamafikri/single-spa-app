import { registerApplication, start } from 'single-spa'

registerApplication(
  'react',
  () => import('./src/vue/main.app.js'),
  () => location.pathname === 'vue' ? false : true,
)

registerApplication(
  'vue',
  () => import('./src/vue/vue.app.js'),
  () => location.pathname === 'react' ? false : true,
)

start()
