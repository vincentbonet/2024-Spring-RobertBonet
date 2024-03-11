<script setup lang="ts">
import { ref, computed } from 'vue'
import { Product, getProducts } from '@/model/products';
import ProductCard from '@/components/ProductCard.vue'
import FlyOut from '../../components/FlyOut.vue';
import { addToCart} from '../viewModel/cart';
import ShoppingCart from '@/components/ShoppingCart.vue'

    const products = ref([] as Product[])

    products.value = getProducts()

</script>
<template>
    <div class="product-list">
        <div v-for="product in products" :key="product.id" class="card" >
            <div class="card-image">
                <img :src="product.thumbnail" :alt="product.title" />
            </div>
            <div class="card-content">
                <p class="price">${{ product.price }}</p>
                <h3>{{ product.title }}</h3>
                <i>{{ product.brand }}</i>
                <p>{{ product.description }}</p>
                <button @click="addToCart(product)" class="button is-primary">Add to Cart</button>
            </div>
        </div>
    </div>
    <FlyOut :isOpen="false">
    </FlyOut>
</template>

<style scoped>
    .product-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>