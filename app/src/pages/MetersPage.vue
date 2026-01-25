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
    </BContainer>
</template>
