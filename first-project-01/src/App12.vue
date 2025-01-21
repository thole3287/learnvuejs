<script setup>

//input binding
import { reactive, ref } from 'vue';
const text = ref('helo');
const multilineText = ref('')
// const handleInput = (e) =>{

// text.value = e.target.value;
// }
</script>

<template>
  <div>
   <p>{{ text }}</p>
   <!-- <input :value="text" @input="handleInput" /> -->
   <input v-model="text" />
   <p>{{ multilineText }}</p>
   <!-- <input :value="text" @input="handleInput" /> -->
   <textarea v-model="multilineText" placeholder="Enter your message"></textarea>
  </div>
</template>
 <style></style>
