<template>
    <div class="seating container">
        <div class="row justify-content-md-center">
            <div class="col col-lg-3">
                <form>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input type="text" required class="form-control" placeholder="Username"
                            aria-label="Username" aria-describedby="basic-addon1">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col col-sm-12">
                <DatePicker class="mt-2" v-model="date" @dayclick="onDayClick" />
                <OfficeMap :seatCoordinates="seatCoordinates" />
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
                seatCoordinates: seatCoordinates,
                date: new Date()
            }
        },
        computed: {},
        methods: {
            onDayClick(day) {
                this.$store.dispatch('fetchSeatConfigByDay', day.id)
            }
        }
    }
</script>