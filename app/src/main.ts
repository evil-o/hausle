import { createApp, type Component } from 'vue'
import { createPinia } from 'pinia'
import { createBootstrap, Components, Directives } from 'bootstrap-vue-next'

import App from './App.vue'
import router from './router'

// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const pinia = createPinia();
const app = createApp(App)

app.use(pinia)
app.use(createBootstrap())
app.use(router)

for (const name in Components) {
  app.component(name, Components[name as keyof typeof Components] as Component)
}
for (const name in Directives) {
  app.directive(name.replace(/^v/, ''), Directives[name as keyof typeof Directives])
}

app.mount('#app')
