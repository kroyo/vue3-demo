<template>
  <h2 class="mb20">todoList Demo</h2>
  <AddItem @add-item="addItem"></AddItem>
  <div class="container-filter">
    <div
      class="filter-item"
      :class="{ active: item.value === filterActive }"
      v-for="(item, key) in tabList"
      :key="key"
      @click="filterTodo(item)">
      {{ item.label }}
    </div>
  </div>
  <TodoList :todoList="filterTodoList" @change-check="changeCheck" @delete-item="deleteItem"></TodoList>
</template>

<script setup>
import { reactive, ref, computed } from '@vue/reactivity'
import AddItem from './add-item.vue'
import TodoList from './list.vue'
const todos = [
  { id: 'first', title: '1111', checked: true },
  { id: 'second', title: '2222', checked: false }
]
const tabList = [
  { label: '全部', value: 'all' },
  { label: '已完成', value: '1' },
  { label: '未完成', value: '0' }
]

const todoList = reactive(todos)
const filterActive = ref('all')

// computed
const filterTodoList = computed(() => {
  let list = todoList
  switch(filterActive.value) {
    case '0':
      list = todoList.filter(item => !item.checked)
      break
    case '1':
      list = todoList.filter(item => item.checked)
      break
    default:
      return todoList
  }
  return list
})

// methods
// 添加
const addItem = (value) => {
  const id = `item${todoList[todoList.length]}`
  todoList.push({ id, title: value, checked: 0 })
}
// 删除
const deleteItem = (id) => {
  console.log('>>>deleteItem', id)
  const index = todoList.findIndex(item => item.id === id)
  todoList.splice(index, 1)
}
// 修改
const changeCheck = (todoItem) => {
  const index = todoList.findIndex(item => item.id === todoItem.id)
  todoList[index].checked = todoItem.checked
  console.log('>>>changeCheck', todoItem)
}
// 过滤
const filterTodo = ({ value }) => {
  console.log('>>>filterTodo', value, filterActive)
  filterActive.value = value
}
</script>

<style lang="scss" scoped>
.container-filter {
  display: flex;
  align-items: center;
  height: 32px;
  color: #c0c2ce;
  .filter-item {
    padding: 0 8px;  
    cursor: pointer;
    transition: 0.4s;
    &.active {
      color: #6b729c;
      transform: scale(1.2);
    }
  }
}
</style>