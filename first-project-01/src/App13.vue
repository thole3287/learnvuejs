<script setup>

//v model với checkbox, radio, select
import { reactive, ref } from 'vue';
const text = ref('helo');
const multilineText = ref('')

const checkedNames = ref([]);
const radioChecked = ref([]);
const selectValue = ref([]);

</script>

<template>
  <div>
   <p>{{ text }}</p>
   <input v-model="text" />
   
   <p>{{ multilineText }}</p>
   <textarea v-model="multilineText" placeholder="Enter your message"></textarea>
   
   <p>Checkbox: {{ checkedNames }}</p>
    <input type="checkbox" id="a" v-model="checkedNames"  value="A">
    <label for="a">A</label>
    <input type="checkbox" id="b" v-model="checkedNames"  value="B">
    <label for="b">B</label>
    <input type="checkbox" id="c" v-model="checkedNames"  value="C">
    <label for="c">C</label>
   
   <p>Radio: {{ radioChecked }}</p>
   <input type="radio" v-model="radioChecked" id="a" value="A">
   <label for="a">A</label>
   <input type="radio" v-model="radioChecked" id="b" value="B">
   <label for="b">B</label>
   
   <p>Select: {{ selectValue }}</p>

    <select v-model="selectValue">
      <option disabled value="" selected>Please select option</option>
      <option >A</option>
      <option >B</option>
      <option >C</option>
    </select>
  </div>
</template>
 <style></style>
