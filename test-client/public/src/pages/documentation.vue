<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    title: String,
});
</script>

<template>
    <div class="bg-black text-white">
        <header class="py-4 px-8">
            <h1 class="text-4xl">{{ title }}</h1>
        </header>

        <main class="py-8 px-8">
            <section>
                <h2 class="text-2xl font-bold mb-4">Section 1</h2>
                <p class="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p class="mb-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
            </section>

            <section>
                <h2 class="text-2xl font-bold mb-4">Section 2</h2>
                <p class="mb-2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                <p class="mb-2">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
            </section>
        </main>

        <footer class="py-4 px-8 text-center">
            <p>&copy; 2024 My Website. All rights reserved.</p>
        </footer>
    </div>
</template>

<style scoped>
/* Add your custom styles here */
</style>