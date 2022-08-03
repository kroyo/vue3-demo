<template>
  <h2 class="mb20">todoList Demo</h2>
  <AddItem @add-item="addItem"></AddItem>
  <TodoList :todoList="todoList" @delete-item="deleteItem"></TodoList>
</template>

<script setup>
import { reactive } from '@vue/reactivity'
import AddItem from './add-item.vue'
import TodoList from './list.vue'
const todos = [
  { id: 'first', title: '1111' }
]

const todoList = reactive(todos)

// methods
// 添加
const addItem = (value) => {
  const id = `item${todoList[todoList.length]}`
  todoList.push({ id, title: value })
}
// 删除
const deleteItem = (id) => {
  console.log('>>>deleteItem', id)
  const index = todoList.findIndex(item => item.id === id)
  todoList.splice(index, 1)
}
</script>

<style>

</style>