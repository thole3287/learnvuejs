<script setup>
import { reactive } from 'vue';
const object = reactive({
  count: 0,
  user:{
    age:18
  },
  array:[1,2,3,4,5]
});
// count.value++;
const increase = () => {
  object.count++
  object.user.age++
  object.array.push(6)
};
</script>

<template>
  <div>{{ object.count }}</div>
  <div>{{ object.user.age }}</div>
  <div>{{ object.array }}</div>

  <button @click="increase()">Increase</button>
  <button @click="count--">Decrease</button>

</template>

<style scoped>

</style>
