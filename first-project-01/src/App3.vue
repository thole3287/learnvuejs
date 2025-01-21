<script setup>
import { computed, reactive } from 'vue';
const book = reactive({
  title: 'Vue 3 Guide',
  chapter: []
})
const addChapter = () => {
  book.chapter.push('Chapter 1')
}

const isPublished = computed(() => {
  return book.chapter.length > 0 ? 'Yes' : 'No'
})
</script>

<template>
  <div>Chapter: {{ book.title }}</div>
  <div>Đã xuất bản: {{ isPublished }}</div>

  <button @click="addChapter()">Increase</button>

</template>

<style scoped>

</style>
