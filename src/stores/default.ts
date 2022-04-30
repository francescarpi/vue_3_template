import { defineStore } from 'pinia'
import { Package } from '../models/package'

export type RootState = {
  packages: Package[]
}

export const useDefaultStore = defineStore('default', {
  state: () =>
    ({
      packages: [
        {
          name: 'Vue 3',
          id: 'vue3'
        },
        {
          name: 'Tailwind',
          id: 'tailwind'
        },
        {
          name: 'Pinia',
          id: 'pinia'
        },
        {
          name: 'VueRouter',
          id: 'vue-router'
        }
      ]
    } as RootState)
})
