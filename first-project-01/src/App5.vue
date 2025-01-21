<script setup>
import { computed, reactive, ref } from 'vue';

const isActive = ref(true);
const hasError = ref(false);
// const isActive = false;
// const hasError = true;
// const classObject = reactive({
//   active: true,
//   'has-error': true
// });

const classObject = computed( ()=> ({
  active: isActive.value,
  'has-error': hasError.value
}));


const changeActive = () => {
  isActive.value = !isActive.value;
}

</script>

<template>
  <button 
  @click="changeActive"
  class="button" 
  :class="[ isActive ? 'active' : '', { 'has-error': hasError } ]"
  >
  {{  isActive ? 'Active' : 'Deactive' }}</button>
  <button 
  @click="changeActive"
  class="button" 
  :class="classObject"
  >
  {{  isActive ? 'Active' : 'Deactive' }}</button>
</template>

<style>
.button {
  border: none;
  background: #ede9fe;
  color: #8b5cf6;
  padding: 10px 14px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: #c7d2fe;
  }
}

.active {
  background: #8b5cf6;
  color: #ede9fe;
  &:hover {
    background: #7f64bf;
  }
}
.has-error{
  background: #ef4444;
  color: #fee2e2;
  &:hover {
    background: #f87171;
  }
}
</style>
