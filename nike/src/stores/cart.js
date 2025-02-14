import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";

export const useCartStore = defineStore("cart", () => {
  // Lấy dữ liệu từ localStorage nếu có, nếu không thì tạo mảng rỗng
  const cartItems = ref(JSON.parse(localStorage.getItem("cart")) || []);

  // Tính tổng số lượng sản phẩm trong giỏ hàng
  const totalCartItem = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.quantity, 0)
  );

  // Tính tổng tiền của giỏ hàng
  const total = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)
  );

  // Hàm thêm sản phẩm vào giỏ hàng
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

  // Cập nhật số lượng sản phẩm
  const updateQuantity = (id, color, size, amount) => {
    const index = cartItems.value.findIndex(
      (item) => item.id === id && item.color === color && item.size === size
    );

    if (index !== -1) {
      cartItems.value[index].quantity += amount;
      if (cartItems.value[index].quantity <= 0) {
        cartItems.value.splice(index, 1); // Xóa sản phẩm nếu số lượng về 0
      }
    }
  };

  // Xóa sản phẩm khỏi giỏ hàng
  const removeItem = (id, color, size) => {
    cartItems.value = cartItems.value.filter(
      (item) => !(item.id === id && item.color === color && item.size === size)
    );
  };

  // **Bước 2: Theo dõi thay đổi trong giỏ hàng và lưu vào Local Storage**
  watch(cartItems, (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
  }, { deep: true });

  return { cartItems, total, totalCartItem, addToCart, updateQuantity, removeItem };
});
