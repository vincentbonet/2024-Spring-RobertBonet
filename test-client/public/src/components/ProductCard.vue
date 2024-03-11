<script setup lang = "ts" >
const props = defineProps()<{
    product:Product
}>()
</script>

<template>
    <div class = "card-image">
        <img :src="product.thumbnail" alt="product.title"/>
    </div>
    <div class = "card-content">
        <p class = "price">${{ product.price }}</p>
        <h3>{{ product.title }}</h3>
        <i>{{ product.brand }}</i>
        <p>{{ product.description }}</p>
        <button>@click="addToCart(product)">Add to Cart</button>
    </div>
</template>