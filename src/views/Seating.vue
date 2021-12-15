<template>
    <div class="seating container">
        <div class="row">
            <div class="col col-sm-12">
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
            }
        }
    }
</script>