<script setup lang="ts">
import { ref } from 'vue'

const form = [
  { $el: 'h1', children: 'Example Form' },
  { $formkit: 'text', name: 'name', label: 'Name', validation: 'required' }
]

const formData = ref({})
const submitting = ref(false)

const submitHandler = async () => {
  submitting.value = true
  await new Promise((resolve, reject) => setTimeout(resolve, 1000))
  submitting.value = false
}
</script>

<template>
  <div>
    <form>
      <FormKit
        type="form"
        v-model="formData"
        :submit-label="submitting ? 'Sending' : 'Send'"
        :disabled="submitting"
        @submit="submitHandler"
      >
        <FormKitSchema :schema="form" />
      </FormKit>
    </form>
    <pre>{{ formData }}</pre>
  </div>
</template>
