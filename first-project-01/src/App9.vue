<script setup>

//ngăn chặn click cha khi click con
import { reactive, ref } from 'vue';
const sayHi1 = () => {
  alert('Hi 1');
}
const sayHi2 = () => {
  alert('Hi 2');
}
</script>

<template>
  <div>
    <button @click="sayHi1">
      <button @click.stop="sayHi2"> say hi 2</button>
      say hi 1
    </button>
<!-- or -->
    <button @click.self="sayHi1">
      <button @click.self="sayHi2"> say hi 2</button>
      say hi 1
    </button>
  </div>
</template>
 <style></style>
