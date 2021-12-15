import {
    createApp
} from 'vue'
import {
    createStore
} from 'vuex'
import App from './App.vue'
import router from './router'
import {
    SetupCalendar,
    Calendar,
    DatePicker
} from 'v-calendar';

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
        setSeatConfig(state, seats) {
            state.seats = seats
        },
        setDayId(state, id) {
            state.dayId = id
        }
    },
    getters: {
        getSeatById: (state) => (id) => {
            return state.seats.find(seat => seat.id === id)
        },
        getNumberOfOccupiedSeats: state => {
            return state.seats.filter(seat => seat.occupied).length
        },
        getNumberOfEmptySeats: state => {
            return state.seats.filter(seat => !seat.occupied).length
        },
        computedSeats: (state) => (seatCoordinates) => {
            return state.seats.map((item, index) => {
                return {
                    ...item,
                    ...seatCoordinates[index]
                }
            })
        }
    },
    actions: {
        fetchSeatConfig({
            commit
        }) {
            fetch('http://localhost:8081/api/placing')
                .then(response => response.json())
                .then(data => {
                    if(data[0]) {
                        commit('setSeatConfig', data[0].seats)
                        commit('setDayId', data[0]._id)
                    }
                })
        },
        fetchSeatConfigByDay({
            commit
        }, day) {
            fetch('http://localhost:8081/api/placing?' + new URLSearchParams({
                    day: day,
                }))
                .then(response => response.json())
                .then(data => {
                    if(data[0]) {
                        commit('setSeatConfig', data[0].seats)
                        commit('setDayId', data[0]._id)
                    }
                })
        }
    }
})

createApp(App).use(router).use(store).use(SetupCalendar, {}).component('Calendar', Calendar)
    .component('DatePicker', DatePicker).mount('#app')