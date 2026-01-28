<script setup lang="ts">
import MeterCard from '@/components/MeterCard.vue';
import { useMetersStore } from '@/stores/meters';

const metersStore = useMetersStore();

</script>

<template>
    <BContainer>
        <BRow>
            <BCol>
                <h1 class="d-flex justify-content-between my-3">
                    Meters
                    <BButton class="ms-5" variant="outline-primary" v-on:click="metersStore.addMeter()">Add Meter</BButton>
                </h1>
            </BCol>
        </BRow>
        <BCardGroup columns>
            <MeterCard v-for="meter in metersStore.meters" :key="meter.id" :meterId="meter.id" :unit="meter.unit"
                :lastReading="meter.lastReading" :meterName="meter.name" />
        </BCardGroup>
    </BContainer>
</template>
