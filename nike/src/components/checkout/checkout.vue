<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-6">
                <div class="container mt-4">
                    <div class="card p-4 mb-3">
                        <p>Already have an account? <a href="#">Login here</a></p>
                        <div class="row g-2">
                            <div class="col-md-6">
                                <input v-model="login.email" type="text" class="form-control"
                                    placeholder="Your name/Email" />
                            </div>
                            <div class="col-md-6">
                                <input v-model="login.password" type="password" class="form-control"
                                    placeholder="Password" />
                            </div>
                        </div>
                        <button class="btn btn-dark mt-3 w-100" @click="handleLogin">Login</button>
                    </div>

                    <div class="card p-4 mb-3">
                        <h2>Information</h2>
                        <div class="row g-2">
                            <div class="col-md-6">
                                <input v-model="user.firstName" type="text" class="form-control"
                                    placeholder="First Name*" />
                            </div>
                            <div class="col-md-6">
                                <input v-model="user.lastName" type="text" class="form-control"
                                    placeholder="Last Name*" />
                            </div>
                            <div class="col-md-6">
                                <input v-model="user.email" type="email" class="form-control"
                                    placeholder="Email Address*" />
                            </div>
                            <div class="col-md-6">
                                <input v-model="user.phone" type="text" class="form-control"
                                    placeholder="Phone Number*" />
                            </div>
                            <div class="col-md-12">
                                <select v-model="user.country" class="form-select">
                                    <option>Choose Country/Region</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="card p-4">
                        <h2>Choose payment Option:</h2>
                        <div v-for="option in paymentOptions" :key="option.value" class="form-check">
                            <input class="form-check-input" type="radio" v-model="paymentMethod" :value="option.value"
                                @change="toggleCreditCardForm" />
                            <label class="form-check-label">{{ option.label }}</label>
                        </div>

                        <div v-if="paymentMethod === 'Credit Card'" class="mt-3">
                            <input type="text" class="form-control mt-2" placeholder="Name On Card*"
                                v-model="creditCard.name" />
                            <input type="text" class="form-control mt-2" placeholder="Card Numbers*"
                                v-model="creditCard.number" />
                            <div class="row g-2 mt-2">
                                <div class="col-md-6">
                                    <input type="date" class="form-control" v-model="creditCard.expiry" />
                                </div>
                                <div class="col-md-6">
                                    <input type="text" class="form-control" placeholder="CVV*"
                                        v-model="creditCard.cvv" />
                                </div>
                            </div>
                        </div>

                        <button class="btn btn-dark mt-3 w-100" @click="processPayment">Payment</button>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="container mt-5">
                    <h4>Shopping Cart</h4>
                    <div v-for="item in cart" :key="item.id" class="row border-bottom py-3 cart-item">
                        <div class="col-md-2"><img :src="item.image" :alt="item.name" /></div>
                        <div class="col-md-6">
                            {{ item.name }} <br />
                            <small>{{ item.details }}</small>
                        </div>
                        <div class="col-md-4 text-end">{{ item.quantity }} X ${{ item.price }}</div>
                    </div>
                    <div class="d-flex justify-content-between mt-3">
                        <h5>Total</h5>
                        <h5>${{ totalPrice }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';


import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore();
const { cartItems, total, updateQuantity, removeItem } = cartStore;

const login = ref({ email: '', password: '' });
const user = ref({ firstName: '', lastName: '', email: '', phone: '', country: '' });
const paymentMethod = ref('Credit Card');
const creditCard = ref({ name: '', number: '', expiry: '', cvv: '' });

const cart = ref([
    { id: 1, name: 'V-neck cotton T-shirt', details: 'XL/Blue', price: 60, quantity: 1, image: 'image1.jpg' },
    { id: 2, name: 'Polarized sunglasses', details: 'XL/Blue', price: 60, quantity: 1, image: 'image2.jpg' },
    { id: 3, name: 'Ramie shirt with pockets', details: 'XL/Blue', price: 60, quantity: 1, image: 'image3.jpg' }
]);

const paymentOptions = ref([
    { value: 'Credit Card', label: 'Credit Card' },
    { value: 'Cash on delivery', label: 'Cash on delivery' },
    { value: 'Apple Pay', label: 'Apple Pay' },
    { value: 'PayPal', label: 'PayPal' }
]);

const totalPrice = computed(() => {
    return cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0);
});

const handleLogin = () => {
    alert(`Logging in with ${login.value.email}`);
};

const processPayment = () => {
    alert(`Processing payment with ${paymentMethod.value}`);
};

const toggleCreditCardForm = () => {
    if (paymentMethod.value !== 'Credit Card') {
        creditCard.value = { name: '', number: '', expiry: '', cvv: '' };
    }
};
</script>

<style scoped>
.cart-item img {
    width: 70px;
    height: auto;
    border-radius: 5px;
}
</style>