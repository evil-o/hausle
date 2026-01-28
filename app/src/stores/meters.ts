import type { IMeter } from '@/models/meter'
import { defineStore } from 'pinia'

export const useMetersStore = defineStore('meters', {
  state: () => ({ meters: [] as IMeter[] }),
  actions: {
    addMeter(meter: IMeter) {
      this.meters.push({...meter})
    },
  },
})
