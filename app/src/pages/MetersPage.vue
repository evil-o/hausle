<script setup lang="ts">
import MeterCard from '@/components/MeterCard.vue';
import type { IMeter } from '@/models/meter';
import { useMetersStore } from '@/stores/meters';

const metersStore = useMetersStore();

const addModalFormData: Partial<IMeter> = {};

function addModalConfirmed() {
    // TODO: validate?
    metersStore.addMeter(addModalFormData as IMeter);
}

</script>

<template>
    <BContainer>
        <BRow>
            <BCol>
                <h1 class="d-flex justify-content-between my-3">
                    Meters
                    <BButton class="ms-5" variant="outline-primary" v-b-modal.add-meter-modal>Add Meter</BButton>
                </h1>
            </BCol>
        </BRow>
        <BCardGroup columns>
            <MeterCard v-for="meter in metersStore.meters" :key="meter.id" :meterId="meter.id" :unit="meter.unit"
                :lastReading="meter.lastReading" :meterName="meter.name" />
        </BCardGroup>
    </BContainer>

    <BModal id="add-meter-modal" title="Add Meter" ok-title="Add" v-on:ok="addModalConfirmed()">
        <BForm>
            <BFormGroup id="meter-id-form-group" label="Meter identifier" label-for="meter-id-input"
                description="A unique meter ID, usually printed on the meter itself.">
                <b-form-input id="meter-id-input" type="text" placeholder="Enter meter id" v-model="addModalFormData.id" required />
            </BFormGroup>
            <BFormGroup id="meter-name-form-group" label="Meter name" label-for="meter-name-input"
                description="A logical name for the meter that helps you recognize it.">
                <b-form-input id="meter-name-input" type="text" placeholder="Enter meter name" v-model="addModalFormData.name" required />
            </BFormGroup>
            <BFormGroup id="meter-unit-form-group" label="Meter unit" label-for="meter-unit-input"
                description="The unit in which the readings for the meter are stored.">
                <b-form-input id="meter-unit-input" type="text" placeholder="Enter meter unit" v-model="addModalFormData.unit" required />
            </BFormGroup>
        </BForm>
    </BModal>
</template>
