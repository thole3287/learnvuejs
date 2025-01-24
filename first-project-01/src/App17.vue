<script setup>

//refs trong vuejs
import { onMounted, reactive, ref, watch, watchEffect } from 'vue';
const inputRef = ref(null)

const list = ref(["item 1", "item 2", "item 3"])
const itemRefs = ref([])

onMounted(() => {
  inputRef.value.focus()

  itemRefs.value.forEach((item) =>{
    item.style.transition = 'opacity 10s'
    item.style.opacity = 1
  })
})

</script>

<template>
  <div>
    <h1>Template refs</h1>
    <input type="text" ref="inputRef" />
    <input type="text" :ref="(el) => { console.log(el)}" />

    <ul>
      <li v-for="(item, index) in list" :key="index" ref="itemRefs" style="opacity:  0;">{{ item }}</li>
    </ul>
  </div>
</template>
<style></style>
