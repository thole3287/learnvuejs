<template>
    <div>
        <div class="search-overlay" v-if="isSearchOpen" @click="$emit('close-search')"></div>
        <div class="search-sidebar" :class="{ open: isSearchOpen }">
            <div class="search-header">
                <h2>Shopping search</h2>
                <button @click="$emit('close-search')" class="close-btn">&times;</button>
            </div>

            <div class="search-content p-3">
                <select class="category-dropdown">
                    <option>All Categories</option>
                    <option>Clothing</option>
                    <option>Accessories</option>
                    <option>Shoes</option>
                </select>
                <div class="search-box">
                    <input type="text" placeholder="What are you Looking for?">
                    <button class="search-btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 21L15 15L21 21ZM17 10C17 10.9193 16.8189 11.8295 16.4672 12.6788C16.1154 13.5281 15.5998 14.2997 14.9497 14.9497C14.2997 15.5998 13.5281 16.1154 12.6788 16.4672C11.8295 16.8189 10.9193 17 10 17C9.08075 17 8.1705 16.8189 7.32122 16.4672C6.47194 16.1154 5.70026 15.5998 5.05025 14.9497C4.40024 14.2997 3.88463 13.5281 3.53284 12.6788C3.18106 11.8295 3 10.9193 3 10C3 8.14348 3.7375 6.36301 5.05025 5.05025C6.36301 3.7375 8.14348 3 10 3C11.8565 3 13.637 3.7375 14.9497 5.05025C16.2625 6.36301 17 8.14348 17 10Z" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
                <hr>
                <p class="inspiration-title">NEED SOME INSPIRATION?</p>
                <div class="product-list">
                    <div class="product-item" v-for="(product, index) in products" :key="index">
                        <img :src="product.image" :alt="product.name">
                        <div class="d-flex flex-column" style="height: 90px;">
                            <div>{{ product.name }}</div>
                            <h6 class="text-start">${{ product.price }}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps(["isSearchOpen"]);

const products = [
    { image: "/images/p1.png", name: "Women's tracksuit Q109", price: 379.99 },
    { image: "/images/p2.png", name: "Mercury Tee", price: 54.00},
    { image: "/images/p3.png", name: "Cluse La Boheme Rose Gold", price: 30.00},
    { image: "/images/p4.png", name: "Cream women pants", price: 142.00},
    { image: "/images/p1.png", name: "Women's tracksuit Q109", price: 379.99},
    { image: "/images/p2.png", name: "Mercury Tee", price: 54.00},
    { image: "/images/p3.png", name: "Cluse La Boheme Rose Gold", price: 30.00},
    { image: "/images/p4.png", name: "Cream women pants", price: 142.00},
    { image: "/images/p1.png", name: "Women's tracksuit Q109", price: 379.99},
    { image: "/images/p2.png", name: "Mercury Tee", price: 54.00},
    { image: "/images/p3.png", name: "Cluse La Boheme Rose Gold", price: 30.00},
    { image: "/images/p4.png", name: "Cream women pants", price: 142.00},
];
</script>

<style scoped>
.search-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
}

.search-sidebar {
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    width: 350px;
    background: #fff;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
    transform: translateX(100%);
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    z-index: 1000;
}

.search-sidebar.open {
    transform: translateX(0);
}

.search-header {
    background: black;
    color: white;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.close-btn {
    background: none;
    border: none;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
}

.category-dropdown {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
}

.search-box {
    display: flex;
    /* border: 1px solid #ccc; */
    background: #F8F8F8;

    padding: 5px;
}

.search-box input {
    flex: 1;
    border: none;
    padding: 5px;
    background: #F8F8F8;

}

.search-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
}

.inspiration-title {
    font-weight: bold;
    margin: 20px 0 10px;
}

.search-content {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.product-list {
    flex: 1;
    overflow-y: auto;
    margin-bottom: 50px;
}


.product-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    /* width: 72px; */
    height: 90px;
}

.product-item img {
    width: 72px;
    height: 90px;
    margin-right: 10px;
}

.search-header h2 {
  margin: 0;
  font-size: 1.2rem;
}
</style>
