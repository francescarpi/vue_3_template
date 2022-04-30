<script setup lang="ts">
import { useDefaultStore } from './stores/default'
import BigTitle from './components/atoms/bigTitle.vue'
const store = useDefaultStore()
</script>

<template>
  <div class="p-2">
    <big-title title="Vue 3 Template" class="mb-2" />
    <p>Packages included:</p>
    <ul class="list-disc ml-8 mt-2">
      <li v-for="pkg in store.packages" :key="pkg.id">{{ pkg.name }}</li>
    </ul>
  </div>
</template>
