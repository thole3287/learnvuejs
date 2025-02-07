<template>
  <div>
    <div class="cart-overlay" v-if="isCartOpen" @click="$emit('close-cart')"></div>
    <div class="cart-sidebar" :class="{ open: isCartOpen }">
      <div class="cart-header">
        <h2>Shopping Cart</h2>
        <button @click="$emit('close-cart')" class="close-btn">&times;</button>
      </div>

      <div class="cart-items">
        <div class="cart-item" v-for="item in cartStore.cartItems" :key="`${item.id}-${item.color}-${item.size}`">
          <img :src="item.image" :alt="item.name" />
          <div class="cart-item-details">
            <p class="cart-item-title">{{ item.name }}</p>
            <p class="cart-item-options">{{ item.color }}, {{ item.size }}</p>

            <div class="cart-item-quantity">
              <button @click="cartStore.updateQuantity(item.id, item.color, item.size, -1)">-</button>
              <span>{{ item.quantity }}</span>
              <button @click="cartStore.updateQuantity(item.id, item.color, item.size, 1)">+</button>
            </div>

            <!-- Sửa lỗi hiển thị giá -->
            <p class="cart-item-price">${{ item.price }}</p>

            <button @click="cartStore.removeItem(item.id, item.color, item.size)" class="delete-btn">
              &#128465;
            </button>
          </div>
        </div>
      </div>

      <div class="cart-footer">
        <div class="cart-total">
          <span>Total</span>
          <span>${{ cartStore.total }}</span>
        </div>
        <button class="checkout-btn">Check Out</button>
        <button class="view-cart-btn">View Cart</button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, computed } from 'vue';
import { useCartStore } from "@/stores/cart";

defineProps(["isCartOpen"]);

const cartStore = useCartStore();

const cartItems = ref([
  {
    id: 1,
    name: "Women's tracksuit Q109",
    color: "Blue",
    size: "S",
    price: 379.99,
    quantity: 1,
    image: "https://s3-alpha-sig.figma.com/img/5e3e/bbb3/e6ac9b90a036c06f585190bc81c6c22e?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cNh10rY0~ZQYwO2JdpcDbxT5wSD4teDS9KND8c1EeUEoLG-kJg0UpdJ~JzceniisNDdhJ52GN9~x~qOudCdIfgPFNmgkySauWoucRgQ96gmORunBgxeYzFC2NnqNPowf~fdf-5MkZ1vu1Tetcqm9Ru1~9I48mt7C7c6PZ6V88WCdLKm0OaHJbueX82MSyGK7yAyNNd-2AXJ2LxbG6escKY2qkWxntfwD~3JYjg6TYYILHb0DwJLVueXW~vdxDiIg1PPgQBTItdwtCgx1WD4qB0Kda~kpRbkVqTDCBbD2SGP4sNeiw1bPIQIoVyD-o90LOyNkkLk9KUeLSX2UIwt5Ww__"
  },
  {
    id: 2,
    name: "Mercury Tee",
    color: "White",
    size: "S",
    price: 54.00,
    quantity: 1,
    image: "https://s3-alpha-sig.figma.com/img/5e3e/bbb3/e6ac9b90a036c06f585190bc81c6c22e?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cNh10rY0~ZQYwO2JdpcDbxT5wSD4teDS9KND8c1EeUEoLG-kJg0UpdJ~JzceniisNDdhJ52GN9~x~qOudCdIfgPFNmgkySauWoucRgQ96gmORunBgxeYzFC2NnqNPowf~fdf-5MkZ1vu1Tetcqm9Ru1~9I48mt7C7c6PZ6V88WCdLKm0OaHJbueX82MSyGK7yAyNNd-2AXJ2LxbG6escKY2qkWxntfwD~3JYjg6TYYILHb0DwJLVueXW~vdxDiIg1PPgQBTItdwtCgx1WD4qB0Kda~kpRbkVqTDCBbD2SGP4sNeiw1bPIQIoVyD-o90LOyNkkLk9KUeLSX2UIwt5Ww__"
  }
]);

const total = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
});

const updateQuantity = (id, amount) => {
  const item = cartItems.value.find(item => item.id === id);
  if (item) {
    item.quantity += amount;
    if (item.quantity <= 0) {
      removeItem(id);
    }
  }
};

const removeItem = (id) => {
  cartItems.value = cartItems.value.filter(item => item.id !== id);
};
</script>

<style scoped>
/* .cart-item-price-quantity {
  display: flex;
  justify-content: space-between;
} */
.cart-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.cart-sidebar {
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

.cart-sidebar.open {
  transform: translateX(0);
}

.cart-header {
  background: black;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-header h2 {
  margin: 0;
  font-size: 1.2rem;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
}

.cart-items {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.cart-item img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-right: 1rem;
  border: 1px solid #ccc;
}

.cart-item-details {
  flex: 1;
}

.cart-item-title {
  font-size: 0.9rem;
  margin: 0;
}

.cart-item-options {
  font-size: 0.8rem;
  color: gray;
}

.cart-item-price {
  font-weight: bold;
  margin: 0.5rem 0;
}

.cart-item-quantity {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cart-item-quantity button {
  background: none;
  border: 1px solid #ccc;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.cart-item-quantity span {
  margin: 0 0.5rem;
}

.cart-footer {
  padding: 1rem;
  border-top: 1px solid #ddd;
  display: flex;
  flex-direction: column;
}

.cart-total {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-bottom: 1rem;
}

.checkout-btn {
  background: black;
  color: white;
  margin-bottom: 0.5rem;
  padding: 0.75rem;
  border: none;
  cursor: pointer;
}

.view-cart-btn {
  background: #f4f4f4;
  color: black;
  padding: 0.75rem;
  border: none;
  cursor: pointer;
}
</style>
