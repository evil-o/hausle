<script setup lang="ts">
import { ref } from 'vue';

const meterId = ref("Meter id");
const meterName = ref("Meter name");
const lastReading = ref(1234);
const unit = ref("kW");

</script>

<template>
    <BCard no-body>
        <BCardHeader>{{ meterId }}</BCardHeader>
        <BCardBody>
            <BCardTitle>
                <BCardText>{{ meterName }}</BCardText>
            </BCardTitle>
            <BCardText>{{ lastReading }} {{ unit }}</BCardText>
        </BCardBody>
        <BCardFooter>
            <BButton class="me-2">Add Reading</BButton>
            <BButton>Details</BButton>
        </BCardFooter>
    </BCard>
</template>