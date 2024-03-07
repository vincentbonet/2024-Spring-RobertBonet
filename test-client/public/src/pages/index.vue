<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  msg: String,
});
</script>

<template>
  <main class="bg-primary h-screen">
    <div class="flex items-center justify-center h-full">
      <div class="text-center">
        <h1 class="text-4xl font-bold">Home</h1>
        <h2 class="text-2xl mt-4">Welcome to the Home page</h2>
      </div>
    </div>
  </main>
</template>