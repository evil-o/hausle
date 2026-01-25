<script setup lang="ts">
import { useStorageStore } from "@/stores/storage"
import { StorageProvider } from '@/models/storage-provider';

const storage = useStorageStore();
</script>

<template>
    storage selector

    <BRow class="mb-3">
        <BCol>
            <BButton v-on:click="storage.setProvider(StorageProvider.LocalStorage)">Local Storage</BButton>
        </BCol>
    </BRow>
    <BRow>
        <BCol>
            <BButton v-on:click="storage.setProvider(StorageProvider.GoogleDrive)">Google Drive</BButton>
        </BCol>
    </BRow>
</template>