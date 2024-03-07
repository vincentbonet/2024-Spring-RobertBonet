<script setup lang="ts">
    import { ref,} from 'vue' //ref creates an observable object
    import { type Product, getProducts } from "@/model/products"; // 'type' means any type in a typescript file
    
    const products = ref([] as Product[]) //creates an observable array

    type CartItem = {
        product: Product,
        quantity: number
    }

    const cart = ref([] as CartItem[])

    function addToCart(product: Product) {

        const item = cart.value.find(item => item.product.id === product.id)

        if(item){
            item.quantity++
        } else {
            cart.value.push({product, quantity: 1})
        }
    }

</script>

<template>
    <div class="product-list">
        <div class="grid grid-cols-3 gap-4">
            <div v-for="product in products" :key="product.id" class="p-4 bg-white shadow">
                <div class="content">
                    <h3>{{ product.title }}</h3>
                    <p>{{ product.description }}</p>
                    <p>${{ product.price }}</p>
                    <button @click="addToCart(product)">Add to Cart</button>
                </div>
            </div>
        </div>
    </div> 
    <div class = "flyout">
        <h2>Cart</h2>
        <div v-for="item in cart" :key="item.product.id">
            <h3>{{ item.product.title }}</h3>
            <p>{{ item.product.description }}</p>
            <p>{{ item.quantity }}</p>
            <p class="price">${{ item.product.price * item.quantity }}</p>
        </div>
        {{ cart.length  }} items totalling ${{ cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0) }}
    </div>
</template>

<style scoped>
    .product-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .card{
        flex-basis: 15rem;
        flex-grow: 1;
        margin: 1rem;
    }
    h3{
        font-weight: bold;
    }
    .price{
        font-weight: bold;
        font-size: xx-large;
        color: hotpink;
        float: right;
    }
.flyout{
    position:fixed;
    top: 0;
    right: 0;
    width: 20rem;
    height: 100%;
    background-color: lightgray;
    box-shadow: -1px 0 5px 0 rgba(0,0,0,0.5);
    z-index: 100;
    transform: translateX(100%);
    transition: transform 1s;
    padding: 1rem;
    }
.flyout.active, .flyout:hover{
    transform: translateX(0);
}
.cart li{
    display: flex;
    align-items: center;
    margin: 1rem 0;
}
.cart img{
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
}
</style>