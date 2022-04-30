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
        },
        {
          name: 'FormKit',
          id: 'form-kit'
        }
      ]
    } as RootState)
})
