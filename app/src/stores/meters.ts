import type { IMeter } from '@/models/meter'
import { defineStore } from 'pinia'

export const useMetersStore = defineStore('meters', {
  state: () => ({ meters: [] as IMeter[] }),
  actions: {
    addMeter() {
      this.meters.push({
        id: `${this.meters.length + 1}`,
        name: `Meter ${this.meters.length + 1}`,
        unit: 'kWh',
        lastReading: this.meters.length + 1,
      })
    },
  },
})
