<script setup lang="ts">
import { useDefaultStore } from '../stores/default'
import { storeToRefs } from 'pinia'
import BigTitle from '../components/atoms/BigTitle/BigTitle.vue'
import { onMounted } from 'vue'

const store = useDefaultStore()
const { packages } = storeToRefs(store)
const envVarValue = import.meta.env.VITE_TEST_ENV_VAR

onMounted(() => {
  console.log('%c Home mounted!!', 'color: #ff0000; font-size: 18px')
})
</script>

<template>
  <div class="p-2">
    <big-title title="Vue 3 Template" class="mb-2" />
    <p>Packages included:</p>
    <ul class="list-disc ml-8 mt-2">
      <li v-for="pkg in packages" :key="pkg.id">{{ pkg.name }}</li>
    </ul>
    <hr class="my-2" />
    <p>
      Env var value: <b>{{ envVarValue }}</b>
    </p>
  </div>
</template>
