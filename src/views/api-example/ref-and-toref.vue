<template>
  <div>{{ stateRef }}</div>
  <button @click="addRef">增加Ref</button>
  <div class="mt32">{{ stateToRef }}</div>
  <button @click="addToRef">增加toRef</button>
</template>

<script>
import { ref, toRef } from 'vue'
export default {
  // ref 是对传入数据的拷贝；toRef 是对传入数据的引用
  // ref 的值改变会更新视图；toRef 的值改变不会更新视图
  setup() {
    const obj = { count: 3 }
    const stateRef = ref(obj.count)
    const stateToRef = toRef(obj, 'count')

    const addRef = () => {
      stateRef.value++
      console.log('原始值：', obj)
      console.log('响应式数据对象：', stateRef)
    }

    const addToRef = () => {
      stateToRef.value++
      console.log('原始值：', obj)
      console.log('响应式数据对象：', stateToRef)
    }

    return { stateRef, stateToRef, addRef, addToRef }
  }
}
</script>

<style>

</style>