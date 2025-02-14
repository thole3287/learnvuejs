<template>
    <div class="container mt-5">
        <h2 class="mb-4">Shopping Cart</h2>
        <div class="row">
            <div class="col-md-8">
                <div v-if="cartItems.length === 0" class="text-center">
                    <p>Your cart is empty.</p>
                </div>
                <div :class="['card p-3', { 'mt-3': index > 0 }]" id="cart-items" v-else v-for="(item, index) in cartItems" :key="item.id">
                    <div :class="{ 'd-flex align-items-center': true }">
                        <div class="col-sm-3 d-flex justify-content-center">
                            <a :href="`/product-detail/${item.id}`">
                                <img :src="item.image" alt="Product Image" class="h-20 w-20">
                            </a>
                        </div>
                        <div class="col-sm-5">
                            <h5>
                                <a :href="`/product-detail/${item.id}`">
                                    {{ item.name }}
                                </a>
                                <div class="d-flex">
                                    <div class="text-secondary" style="font-size: 15px;margin-right: 10px;">Size: {{ item.size }}</div>
                                    <div class="text-secondary" style="font-size: 15px;">Color: {{ item.color }}</div>
                                </div>
                            </h5>
                            <div class="d-flex">
                                <button @click="toggleFavorite(item.id)" class="d-flex" style="margin-right: 10px;">
                                    <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                                    </svg>
                                    Add to Favorites
                                </button>
                                <button @click="updateQuantity(item.id, item.color, item.size, -item.quantity)"
                                    class="text-danger">Remove </button>
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <button @click="updateQuantity(item.id, item.color, item.size, -1)"
                                class="btn btn-light btn-sm">-</button>
                            <span class="mx-2 quantity">{{ item.quantity }}</span>
                            <button @click="updateQuantity(item.id, item.color, item.size, 1)"
                                class="btn btn-light btn-sm">+</button>
                        </div>
                        <div class="col-sm-2">
                            <div class="fw-bold price" :data-price="item.price">${{ item.price }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card p-3">
                    <h5>Order Summary</h5>
                    <p>Original price: <span id="original-price" class="fw-bold">${{ total }}</span></p>
                    <p>Tax: <span id="tax" class="fw-bold">$0</span></p>
                    <h4>Total: <span id="total-price">${{ (parseFloat(total)).toFixed(2) }}</span></h4>
                    <button class="btn btn-primary w-100">Proceed to Checkout</button>
                </div>
                <div class="card p-3 mt-3">
                    <h5>Do you have a voucher?</h5>
                    <input type="text" class="form-control mb-2" placeholder="Enter voucher code">
                    <button class="btn btn-success w-100">Apply Code</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore();
const { cartItems, total, updateQuantity, removeItem } = cartStore;
console.log(cartItems);

const toggleFavorite = (id) => {
    // Implement favorite toggle functionality here
    console.log(`Toggled favorite for item with id: ${id}`);
};
</script>

<style scoped>
/* Add any scoped styles here */
</style>