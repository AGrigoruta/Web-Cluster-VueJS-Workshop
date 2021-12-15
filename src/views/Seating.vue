<template>
    <div class="seating container">
        <div class="row">
            <div class="col col-sm-12">
                <OfficeMap />
            </div>
        </div>
    </div>
</template>

<script>
    import OfficeMap from '@/components/OfficeMap';
    export default {
        name: 'Seating',
        components: {
            OfficeMap,
        }
    }
</script>