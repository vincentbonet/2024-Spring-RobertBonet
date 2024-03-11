<script setup lang="ts">
import { ref, computed } from 'vue'
import { type Product, getProducts } from '../model/products';
import ProductCard from '@/components/ProductCard.vue'
import FlyOut from '../../components/FlyOut.vue';

    const products = ref([] as Product[])
    
    products.value = getProducts()

    type CartItem = {
        product: Product,
        quantity: number
    }


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
        <h1 class="title">
            The Cart
        </h1>
        <ul class="cart">
            <li v-for="item in cart" :key="item.product.id">
                <img :src="item.product.thumbnail" :alt="item.product.title" />
                {{ item.product.title }} x {{ item.quantity }} = ${{ item.product.price * item.quantity }}
            </li>
        </ul>
        {{ cart.length }} items totalling ${{ total }}
    </FlyOut>
</template>

<style scoped>
    .product-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .card {
        flex-basis: 15rem;
        flex-grow: 1;
        margin: .5rem;
    }
    h3 {
        font-weight: bold;
    }
    .price {
        font-weight: bold;
        font-size: xx-large;
        color: hotpink;
        float: right;
    }

.cart li {
    display: flex;
    align-items: center;
    margin: 1rem 0;
}
.cart img {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
}
</style>