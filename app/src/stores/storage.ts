import { StorageProvider } from '@/models/storage-provider';
import { defineStore } from 'pinia'

export const useStorageStore = defineStore('storage', {
    state: () => ({chosenProvider: StorageProvider.None}),
    actions: {
        setProvider(provider: StorageProvider) {
            this.chosenProvider = provider;
        }
    }
})
