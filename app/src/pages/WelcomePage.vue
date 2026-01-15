<script setup lang="ts">
import { useStorageStore } from "@/stores/storage"
import { StorageProvider } from '@/models/storage-provider';

const storage = useStorageStore();
</script>

<template>
    <div v-if="storage.chosenProvider === StorageProvider.None">
      <p>No storage provider selected.</p>
    </div>
</template>

<style scoped></style>
