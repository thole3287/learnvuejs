<script setup>
import { computed, ref } from 'vue';
const firstName = ref('Trường Thọ');
const lastName = ref('Lê');

const fullName = () =>  computed({
  get(){
    return firstName.value + ' ' + lastName.value
  },
  set(newValue){
    [firstName.value, lastName.value] = newValue.split(',');
  }
});

const changeFullName = () =>{
  fullName().value = 'Trường Thọ, Lê 1323';
}
</script>

<template>
  <div>Full name: {{ fullName() }}</div>
  <div>Full name: {{ firstName }}</div>
  <div>Full name: {{ lastName }}</div>

  <button @click="changeFullName">Change Full Name</button>
</template>

<style scoped>

</style>
