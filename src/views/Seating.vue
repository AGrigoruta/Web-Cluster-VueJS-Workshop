<template>
    <div class="seating container">
        <div class="row" v-if="isLoggedIn">
            <div class="col col-sm-12">
                <p> Hello : {{ username }}</p>
                <button type="submit" class="btn btn-danger" @click="handleLogout">Logout</button>
            </div>
            <div class="col col-sm-12">
                <DatePicker class="mt-2" v-model="date" @dayclick="onDayClick" />
                <OfficeMap :seatCoordinates="seatCoordinates" />
            </div>
        </div>
        <div class="row justify-content-md-center" v-else>
            <div class="col col-lg-3">
                <form>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input type="text" v-model="name" required class="form-control" placeholder="Username"
                            aria-label="Username" aria-describedby="basic-addon1">
                    </div>
                    <button type="submit" class="btn btn-primary" @click="handleSubmit">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import OfficeMap from '@/components/OfficeMap';
    import seatCoordinates from '@/assets/seatCoordinates.json';

    export default {
        name: 'Seating',
        components: {
            OfficeMap,
        },
        data() {
            return {
                list: [],
                seatCoordinates: seatCoordinates,
                name: '',
                date: new Date()
            }
        },
        computed: {
            username: {
                get: function () {
                    return this.$store.state.username
                },
            },
            isLoggedIn: {
                get: function () {
                    return this.$store.getters.isloggedIn
                },
            }
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                this.$store.commit('updateUsername', this.name)
            },
            handleLogout(e) {
                e.preventDefault();
                this.$store.commit('logOut')
                this.$router.push('About')
            },
            onDayClick(day) {
                this.$store.dispatch('fetchSeatConfigByDay', day.id)
            }
        }
    }
</script>