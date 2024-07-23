<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  title: string
}>()

const submitted = ref(false)
const error = ref('')

async function handleSubmit(event: Event) {
  const formData = new FormData(event.target as HTMLFormElement);
  const data = Object.fromEntries(formData.entries());

  if (!data.message) {
    error.value = 'Gast je hebt geen bericht ingevuld'
    return
  }
  
  await new Promise(resolve => setTimeout(resolve, 1000))

  submitted.value = true
}
</script>

<template>
  <div v-if="submitted">Form submitted successfully</div>

  <form class="card" @submit.prevent="handleSubmit">
    <h1>{{ title }}</h1>

    <label for="name">Name</label>
    <input id="name" type="text" name="name" />

    <!-- <label for="email">Email</label> -->
    <input id="email" type="email" name="email" aria-label="Email" />

    <!-- <label for="message">Message</label> -->
    <textarea id="message" name="message" aria-label="Message"></textarea>

    <button type="submit">Submit</button>
  </form>
</template>