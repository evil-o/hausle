<script setup lang="ts">

const { lastReading, meterId, meterName, unit } = defineProps(["meterId", "meterName", "lastReading", "unit"])

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