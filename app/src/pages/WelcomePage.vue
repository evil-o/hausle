<script setup lang="ts">
import { useStorageStore } from "@/stores/storage"
import { StorageProvider } from '@/models/storage-provider';
import StorageSelector from "./StorageSelector.vue";

const storage = useStorageStore();
</script>

<template>
  <div v-if="storage.chosenProvider === StorageProvider.None">
    <p>No storage provider selected.</p>
    <BButton v-b-modal.select-storage-provider>Select storage provider</BButton>

    <b-modal id="select-storage-provider" title="Select storage provider">
      <StorageSelector></StorageSelector>
    </b-modal>
  </div>
</template>

<style scoped></style>
