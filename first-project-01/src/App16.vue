<script setup>

//watch và watchEffect trong vuejs
import { reactive, ref, watch, watchEffect } from 'vue';

// const count = ref(0)

// watch(count, (newValue, oldValue) => {
//   console.log(`Count changed from ${oldValue} to ${newValue}`);
// })

// const incerement = () => {
//   count.value++
// }

// const question = ref('')
// const answer = ref('')
// const isLoading = ref(false)
// const img = ref('')

// watch(question, async (newQuestion, oldQuestion) =>{
//   if(newQuestion.includes('?')){
//     isLoading.value = true
//     answer.value = 'Đang suy nghĩ'
//   } 
//   try {
//     const resopnse = await fetch(`https://yesno.wtf/api?question=${newQuestion}`)
//     const temp = (await resopnse.json())
//     answer.value = temp.answer
//     img.value = temp.image
//   } catch (error) {
//     answer.value = 'Lỗi'
//   }finally {
//     isLoading.value = false
//   }
// })


const x = ref(0)
const y = ref(0)
const user = reactive({
  name: 'John',
  age: 18,
  class:{
    student: 0,
    name: 'John'
  }
})


watchEffect(() => {
  console.log(`x: ${x.value}, y: ${y.value}`);
})

watchEffect(()=>{
  console.log(`User: ${JSON.stringify(user)}`);
})

// watch(() => x.value + y.value, (sum) => {
//   // console.log(`Sum x + y là:  ${sum}`);

// })

// watch([x, () => y.value+1], ([newX, newY]) => {
//   console.log(`Giá trị cập nhật x: ${newX}, y: ${newY}`);
// })


// // watch(() => user.age, (newUser) => {
// //   console.log(`Tuổi ${newUser}`);
// // })

// watch(user, (newUser, oldUser) => {
//   console.log(`User: ${JSON.stringify(newUser)}, OldUser: ${JSON.stringify(oldUser)}`);
// }, {deep: true, immediate: true})

const increment = () => {
  x.value++
  y.value++
}
// const changeAge = () => {
//   user.age = 20;
// }

const changeAge = () => {
  user.class.student++;
  // user.age++;

}
</script>

<template>
  <div>
  <h1>Watcher</h1>
  <p>Hỏi một câu hỏi yes no</p>
  <!-- <input type="text" v-model="question" :disabled="isLoading" />
  <p>{{ answer }}</p>
  <img :src="img" alt=""> -->
  <button @click="increment">increment</button>
  <button @click="changeAge">changeAge</button>
  <p>{{ user.age }}</p>



  </div>
</template>
 <style></style>
