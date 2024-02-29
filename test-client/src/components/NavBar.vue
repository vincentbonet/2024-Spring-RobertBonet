<script setup lang="ts">
import { RouterLink } from 'vue-router'

let isActive = false;

</script>

<template>
  <template>
    <nav class="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div>
        <RouterLink to="/" class="text-white font-bold text-lg">Home</RouterLink>
      </div>
      <!-- Add more navigation buttons here -->
    </nav>
  </template>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <!-- Add more navigation buttons here -->
    </nav>
    <RouterLink to="/">Home</RouterLink> -->
</template>

<style scoped>

</style>