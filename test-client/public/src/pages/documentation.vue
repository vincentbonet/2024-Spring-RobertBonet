<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    title: String,
});
</script>

<template>
    <div>
        <h1>{{ title }}</h1>
    </div>
</template>

<style scoped>
</style>