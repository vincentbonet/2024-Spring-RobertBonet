<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

let isActive = ref(false);
function toggleMenu() {
  isActive.value = !isActive.value;
}
</script>

<template>
  <template>
    <nav class="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div>
        <RouterLink to="/" class="text-white font-bold text-lg">Home</RouterLink>
      </div>
    </nav>
  </template>
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
</template>

<style scoped>

</style>