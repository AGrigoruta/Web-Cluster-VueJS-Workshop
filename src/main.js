import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'

// Create a new store instance.

createApp(App).use(router).mount('#app')