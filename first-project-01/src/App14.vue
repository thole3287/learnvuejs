<script setup>

//Ràng buộc giá trị trong v-model
import { reactive, ref } from 'vue';
const text = ref('helo');
const multilineText = ref('')

const checkedNames = ref([]);
const radioChecked = ref();
const selectValue = ref('');
const checked = ref();

const firstOption = ref('firstOption');
const secondOption = ref('secondOption');
</script>

<template>
  <div>
   <p>{{ text }}</p>
   <input v-model="text" />
   
   <p>{{ multilineText }}</p>
   <textarea v-model="multilineText" placeholder="Enter your message"></textarea>
   
   <p>Checked: {{ checked }}</p>
   <input type="checkbox" id="a" v-model="checked" true-value="yes" false-value="no">

   <p>Multiple Checkbox: {{ checkedNames }}</p>
    <input type="checkbox" id="a" v-model="checkedNames"  :value="firstOption">
    <label for="a">A</label>
    <input type="checkbox" id="b" v-model="checkedNames"  :value="secondOption">
    <label for="b">B</label> 
    <!-- <input type="checkbox" id="c" v-model="checkedNames"  value="C">
    <label for="c">C</label> -->
   
   <p>Radio: {{ radioChecked }}</p>
   <input type="radio" v-model="radioChecked" id="a" value="A">
   <label for="a">A</label>
   <input type="radio" v-model="radioChecked" id="b" value="B">
   <label for="b">B</label>
   
   <p>Select: {{ selectValue }}</p>

    <select v-model="selectValue">
      <option disabled value="" selected>Please select option</option>
      <option :value="{name:'A'}">A</option>
      <option >B</option>
      <option >C</option>
    </select>
  </div>
</template>
 <style></style>
