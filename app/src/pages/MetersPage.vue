<script setup lang="ts">
import MeterCard from '@/components/MeterCard.vue';
import { useMetersStore } from '@/stores/meters';

const metersStore = useMetersStore();

</script>

<template>
    <BContainer>
        <BRow>
            <BCol>
                <h1>Meters</h1>
            </BCol>
        </BRow>
        <BCardGroup deck>
            <MeterCard v-for="meter in metersStore.meters" :key="meter.id" :meterId="meter.id" :unit="meter.unit"
                :lastReading="meter.lastReading" :meterName="meter.name" />
        </BCardGroup>
        <BRow class="mt-5">
            <BCol>
                <BButton variant="outline-primary" v-on:click="metersStore.addMeter()">Add Meter</BButton>
            </BCol>
        </BRow>
    </BContainer>
</template>
