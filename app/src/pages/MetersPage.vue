<script setup lang="ts">
import MeterCard from '@/components/MeterCard.vue';

</script>

<template>
    <BContainer>
        <BRow>
            <BCol>
                <h1>Meters</h1>
            </BCol>
        </BRow>
        <BCardGroup deck>
            <MeterCard></MeterCard>
            <MeterCard></MeterCard>
            <MeterCard></MeterCard>
        </BCardGroup>
        <BRow class="mt-5">
            <BCol>
                <BButton variant="outline-primary">Add Meter</BButton>
            </BCol>
        </BRow>
    </BContainer>
</template>
