<!-- hooks -->

<template>
  <div class="about">
    <!-- <h1>Time: {{ time }}</h1> -->
     <h1 id="count">Count: {{ count }}</h1>
    <button @click="incerement">Increment</button>
  </div>
</template>

<script setup>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';

const count = ref(0)

const incerement = () => {
  count.value++
}

onBeforeUpdate(() => {
  console.log('onBeforeUpdate', document.getElementById('count').innerText);
})

onUpdated(() => {
  console.log('onUpdated', document.getElementById('count').innerText);
})

// const time = ref(0)
// let intervalId = null;

// onBeforeMount(() => {
//   console.log('AboutView onBeforeMount');
// });

// onMounted(() => {
//   intervalId = setInterval( () =>{
//     time.value++
//   }, 1000)
//   console.log(intervalId, "onMounted");
  
// }); 

// onBeforeUnmount(() => {
//   console.log('AboutView onBeforeUnmount');
// });

// onUnmounted(() => {
//   clearInterval(intervalId)
// });

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
