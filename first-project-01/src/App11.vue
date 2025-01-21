<script setup>

//Key modifier
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
    <input @keyup.enter.alt="sayHi1" />
    <button  @click.shift="submit">submit</button>
  </div>
</template>
 <style></style>
