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
            seats: [],
            dayId: null
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        },
        setSeating(state, seats) {
            state.seats = seats;
        },
        setDayId(state, dayId) {
            state.dayId = dayId;
        }
    },
    getters: {
        computedSeats: (state) => (seatCoordinates) => {
            return state.seats.map((item, index) => {
                return {
                    ...item,
                    ...seatCoordinates[index]
                }
            })
        },
        getSeatById: (state) => (id) => {
            return state.seats.filter(item => item.id === id);
        }
    },
    actions: {
        fetchSeating({commit}) {
            fetch('http://localhost:8081/api/placing')
            .then(resp => resp.json())
            .then((data) => {
                if (data[0]) {
                    commit('setSeating', data[0].seats);
                    commit('setDayId', data[0]._id)
                }
            })
        }
    }
})

createApp(App).use(router).use(store).mount('#app')