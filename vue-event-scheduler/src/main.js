import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// Import views
import Dashboard from './views/Dashboard.vue'
import Events from './views/Events.vue'
import Rehearsals from './views/Rehearsals.vue'
import Scores from './views/Scores.vue'
import Users from './views/Users.vue'
import NewEvent from './views/NewEvent.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Dashboard },
    { path: '/events', component: Events },
    { path: '/rehearsals', component: Rehearsals },
    { path: '/scores', component: Scores },
    { path: '/users', component: Users },
    { path: '/eventos/nuevo', component: NewEvent }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
