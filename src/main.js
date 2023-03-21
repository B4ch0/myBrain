import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import router from './router'
import { firebaseApp } from './firebase/db'
import { VueFire, VueFireAuth } from 'vuefire'

//createApp(App).mount('#app')
const app = createApp(App)
app.use(router)

app.use(VueFire, {
    firebaseApp,
    modules: [
      
      VueFireAuth(),
    ],
  })


app.mount('#app')