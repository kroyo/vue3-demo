<template>
  <todo-list-item
    v-for="(item, key) in todoList"
    :todo-item="item"
    :key="key"
    @change-check="$event => this.$emit('change-check', $event)"
    @delete-item="$event => this.$emit('delete-item', $event)">
  </todo-list-item>
</template>

<script>
import TodoListItem from './list-item.vue'
export default {
  name: 'TodoList',
  components: {
    TodoListItem
  },
  props: {
    todoList: Array
  }
}
</script>

<style>
</style>