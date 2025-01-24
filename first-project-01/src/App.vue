<script setup>

//composable trong vuejs
import { useCounter } from './composables/useCounter';
import { useMouse } from './composables/useMouse';
const {count, incresement, decreament} = useCounter();
const { x, y } = useMouse();
// import { ref } from 'vue';
// const count = ref(0)
// const incresement = () => {
//   count.value++
// }
// const decreament = () => {
//   count.value--
// }
</script>

<template>
  <div>
    <h1>Composable</h1>
   <p>Count: {{ count }}</p>
   <button @click="incresement">Increment</button>
   <button @click="decreament">Decreament</button>
   <p>X: {{ x }}, Y: {{ y }}</p>
  </div>
</template>
<style></style>
