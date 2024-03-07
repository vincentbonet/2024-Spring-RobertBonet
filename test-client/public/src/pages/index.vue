<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  msg: String,
});
</script>

<template>
  <main class="bg-black h-screen">
    <div class="flex items-center justify-center h-full">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-white">Home</h1>
        <h2 class="text-2xl mt-4 text-white">Welcome to the Home page</h2>
        <p class="text-white mt-8">This is a home page using Tailwind CSS.</p>
        <div class="flex justify-center mt-8">
          <button class="bg-white text-black px-4 py-2 rounded-md">Button</button>
        </div>
      </div>
    </div>
  </main>
</template>