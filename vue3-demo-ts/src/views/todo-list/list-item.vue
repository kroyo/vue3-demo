<template>
  <div class="todo-item mb10" :class="{ checked: todoItem.checked }">
    <label class="todo-item-title tl">
      <input class="todo-item-checkbox mr10" v-model="todoItem.checked" type="checkbox" @click="changeCheck" />
      {{ todoItem.title }}
    </label>
    <button class="todo-item-btn text" @click="deleteItem(todoItem)">删除</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import type { PropType } from 'vue'

export interface todo {
  id: string,
  title: string,
  checked: boolean
}
export default defineComponent({
  name: 'TodoListItem',
  props: {
    todoItem: {
      type: Object as PropType<todo>,
      default: () => ({})
    }
  },
  setup(props, context) {
    console.log('>>>listItem')
    console.log(props, context)
    const { todoItem } = toRefs(props)
    // methods
    const changeCheck = () => {
      console.log('>>>listItem', todoItem.value) 
      context.emit('change-check', todoItem.value)
    }
    const deleteItem = (todoItem:todo) => {
      context.emit('delete-item', todoItem.id)
    }

    return { changeCheck, deleteItem }
  }
})
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
    display: flex;
    width: calc(100% - 70px);
    line-height: 32px;
    align-items: center;
    cursor: pointer;
  }
  &-checkbox {
    width: 18px;
    height: 18px;
  }
  &.checked {
    .todo-item-title {
      text-decoration: line-through;
      font-style: italic;
    }
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