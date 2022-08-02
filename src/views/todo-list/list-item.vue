<template>
  <div>
    <div>{{ todoItem.name }}</div>
    <button @click="deleteItem">删除</button>
  </div>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    todoItem: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, context) {
    console.log(props, context)
    // methods
    const deleteItem = () => {
      context.emit('deleteItem', todoItem)
    }

    return { deleteItem }
  }
}
</script>

<style>

</style>