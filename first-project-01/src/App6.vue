<script setup>

//binding style
import { computed, reactive, ref } from 'vue';


const color = ref('red');
const fontSize = ref('30px');
const backgroundColor = ref('blue');

const styleObject = reactive( {
  color: 'none',
  borderRadious: '6px',
})
</script>

<template>
  <button :style="[{ color, fontSize, backgroundColor}, styleObject]" >button</button>

</template>

<style>

</style>
