<template>
  <div class="todo-item mb10">
    <div class="todo-item-title tl">{{ todoItem.title }}</div>
    <button class="todo-item-btn text" @click="deleteItem(todoItem)">删除</button>
  </div>
</template>

<script>
import { toRefs } from 'vue'
export default {
  name: 'TodoListItem',
  props: {
    todoItem: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, context) {
    console.log('>>>listItem')
    console.log(props, context)
    // methods
    const deleteItem = (todoItem) => {
      context.emit('delete-item', todoItem.id)
    }

    return { deleteItem }
  }
}
</script>

<style lang="scss" scoped>
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 300px;
  padding: 10px 20px;
  background-color: var(--ant-primary-1);
  border-radius: 6px;
  &-title {
    width: calc(100% - 70px);
    line-height: 32px;
  }
  &-btn {
    color: #fff;
    font-size: 14px;
    padding: 0 10px;
    background-color: var(--ant-error-color);
    border-radius: 5px;
    &:hover {
      background-color: var(--ant-error-color-hover);
    }
  }
}
</style>