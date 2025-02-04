<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div>
    <Header />
    <Footer />

    <RouterView />
  </div>
</template>

<style scoped>

</style>
