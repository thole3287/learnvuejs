import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetail from '@/views/ProductDetail.vue'
import ShoppingCart from '@/components/shopping-cart/ShoppingCart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/product-detail/:id',
      name: 'product-detail',
      component: ProductDetail,
    },
    {
      path: '/shopping-cart',
      name: 'shopping-cart',
      component: ShoppingCart,
    }
    
  ],
})

export default router
