import { defineStore } from 'pinia'

export enum StorageProvider {
    None = "None",
    LocalStorage= "LocalStorage",
    GoogleDrive = "GoogleDrive",
}

export const useStorageStore = defineStore('storage', {
    state: () => ({chosenProvider: StorageProvider.None}),
    actions: {
        setProvider(provider: StorageProvider) {
            this.chosenProvider = provider;
        }
    }
})
