import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import router from './router'
import { firebaseApp } from './firebase/db'
import { VueFire, VueFireAuth } from 'vuefire'
import { createPinia } from 'pinia'

//createApp(App).mount('#app')
const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(VueFire, {
    firebaseApp,
    modules: [
      
      VueFireAuth(),
    ],
  })


app.mount('#app')