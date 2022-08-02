<template>
  <div>
    <todo-list-item v-for="(item, key) in todos" :key="key"></todo-list-item>
  </div>
</template>

<script>
import { toRef } from 'vue'
import TodoListItem from './list-item.vue'
export default {
  name: 'TodoList',
  setup(props, context) {
    console.log(props, context)
    const { todos } = toRef(props, 'todos')

    // methods
    const deleteItem = () => {

    }

    return { todos, deleteItem }
  }
}
</script>

<style>
</style>