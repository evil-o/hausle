<script setup lang="ts">

const { lastReading, meterId, meterName, unit, category } = defineProps(["meterId", "meterName", "lastReading", "unit", "category"])

</script>

<template>
    <BCard no-body>
        <BCardHeader><small class="me-2">{{ category }}</small>{{ meterId }}</BCardHeader>
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