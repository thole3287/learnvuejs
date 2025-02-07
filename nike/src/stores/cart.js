import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cartItems = ref([]);

  const total = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)
  );

  const addToCart = (product) => {
    const existingItem = cartItems.value.find(
      (item) => item.id === product.id && item.color === product.color && item.size === product.size
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.value.push({ ...product, quantity: 1 });
    }
  };

  const updateQuantity = (id, color, size, amount) => {
    const index = cartItems.value.findIndex(
      (item) => item.id === id && item.color === color && item.size === size
    );

    if (index !== -1) {
      cartItems.value[index].quantity += amount;
      if (cartItems.value[index].quantity <= 0) {
        cartItems.value.splice(index, 1); // Xóa phần tử đúng
      }
    }
  };

  const removeItem = (id, color, size) => {
    cartItems.value = cartItems.value.filter(
      (item) => !(item.id === id && item.color === color && item.size === size)
    );
  };

  return { cartItems, total, addToCart, updateQuantity, removeItem };
});
