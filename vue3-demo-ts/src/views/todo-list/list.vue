<template>
  <todo-list-item
    v-for="(item, key) in todoList"
    :todo-item="item"
    :key="key"
    @change-check="$emit('change-check', $event)"
    @delete-item="$emit('delete-item', $event)">  
  </todo-list-item>
</template>

<script lang="ts">
import TodoListItem from './list-item.vue'
export default {
  name: 'TodoList',
  components: {
    TodoListItem
  },
  props: {
    todoList: Array
  },
  emits: ['change-check', 'delete-item']
}
</script>

<style>
</style>