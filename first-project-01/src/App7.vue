<script setup>

//v for object
import { computed, reactive, ref } from 'vue';
const users = ref([
{
  name: 'John',
  age: 30,
  isActive: true
},
{
  name: 'Thomas',
  age: 17,
  isActive: false
},
{
  name: 'Thole',
  age: 17,
  isActive: true
}
]
)

</script>

<template>
<div>
  <ul>
    <template v-for="(user, index) in users">
      <li v-if="user.isActive" :key="user.name">{{ user.name }}: {{ isActive ? 'Active' : 'Deactive' }} ({{ index }})</li>
    </template>
  </ul>
</div>
</template>

<style>

</style>
