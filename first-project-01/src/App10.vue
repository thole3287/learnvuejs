<script setup>

//ngăn chặn load trang mặc định của submit, nó chỉ caall method thôi
import { reactive, ref } from 'vue';
const sayHi1 = () => {
  alert('Hi 1');
}
const submit = () => {
  alert('submit');
}
</script>

<template>
  <div>
    <form @submit.prevent.stop="submit">
      <button type="submit">submit</button>
    </form>
  </div>
</template>
 <style></style>
