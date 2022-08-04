<template>
  <div class="input-add mb16">
    <input class="input-add-input" type="text" v-model="itemTitle" @keyup.enter="emitAddItem" />
    <button class="input-add-btn text" @click="emitAddItem">添加</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'AddItem',
  setup(props, context) {
    console.log('>>>AddItem')
    console.log(props, context)
    const itemTitle = ref('')
    // methods
    const emitAddItem = () => {
      if (!itemTitle.value.trim()) {
        return alert('请填写明确任务!')
      }
      context.emit('add-item', itemTitle.value)
      itemTitle.value = ''
    }

    return { itemTitle, emitAddItem }
  }
}
</script>

<style lang="scss" scoped>
.input-add {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 300px;
  &-input {
    width: calc(100% - 70px);
    line-height: 32px;
    border-width: 1px;
    border-radius: 5px;
  }
  &-btn {
    color: #fff;
    font-size: 14px;
    padding: 5px 15px;
    background-color: var(--ant-primary-color);
    border-radius: 5px;
    &:hover {
      background-color: var(--ant-primary-color-hover);
    }
  }
}
</style>