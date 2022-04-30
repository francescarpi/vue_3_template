<script setup lang="ts">
// Imports
import { toRefs } from 'vue'

// Component Props
const props = defineProps<{
  title: string
}>()

// Making props reactive
const { title } = toRefs(props)
</script>

<template>
  <h1 class="text-xl font-bold">{{ title }}</h1>
</template>
