import {
    createApp
} from 'vue'
import {
    createStore
} from 'vuex'
import App from './App.vue'
import router from './router'

// Create a new store instance.
const store = createStore({
    state() {
        return {
            count: 0,
            seats: []
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        },
    },
    getters: {
        computedSeats: (state) => (seatCoordinates) => {
            return state.seats.map((item, index) => {
                return {
                    ...item,
                    ...seatCoordinates[index]
                }
            })
        }
    },
    actions: {}
})

createApp(App).use(router).use(store).mount('#app')