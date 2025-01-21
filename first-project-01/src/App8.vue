<script setup>

//todos
import { computed, reactive, ref } from 'vue';
const newTodo = ref('');
const todos = reactive([
  {
    id: 1,
    text: 'Learn Vue',
    isActive: true
  },
  {
    id: 2,
    text: 'Learn React',
    isActive: false
  },
  {
    id: 3,
    text: 'Learn Angular',
    isActive: true
  }])

  const addTodo = () => {
    
      if (newTodo.value.trim() === '') {
          return;
      }
      const todo = {
          id: todos.length + 1,
          text: newTodo.value,
          isActive: true
      };
      todos.push(todo);
      newTodo.value = '';
  }

const deleteValue = (id) => {  
  todos.filter(todo => todo.id !== id);
  const updatedTodos = todos.filter(todo => todo.id !== id);
  todos.length = 0;
  todos.push(...updatedTodos);
}
</script>

<template>
  <div>
    <input type="text" v-model="newTodo" @keyup.enter="addTodo">
    <button @click="addTodo">Add</button>
    <ul>
        <li v-for="todo in todos" :key="todo.id">{{ todo.text }}  <button @click="deleteValue(todo.id)"> Delete</button>
        </li>
    </ul>
  </div>
</template>

<style></style>
