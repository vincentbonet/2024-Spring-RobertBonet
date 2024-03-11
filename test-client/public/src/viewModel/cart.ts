import type { Product } from '../model/products'
import { computed, ref } from 'vue'

    export type CartItem = {
        product: Product,
        quantity: number
    }

const cart = ref([] as CartItem[])

    export const refCart = () => cart

    function addToCart(product: Product) {

        const item = cart.value.find(item => item.product.id === product.id)

        if (item) {
            item.quantity++
        } else {
            cart.value.push({ product, quantity: 1 })
        }
    }

    export const total = computed( () => cart.value.reduce((total, item) => total + item.product.price * item.quantity, 0) )
