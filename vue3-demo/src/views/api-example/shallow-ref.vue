<template>
  <div>a: {{ state.a }}</div>
  <div>b: {{ state.first.b }}</div>
  <div>c: {{ state.first.second.c }}</div>
  <button @click="changeFirst">重新赋值</button><br />
  <button @click="changeSecond">直接修改数据</button>
</template>

<script>
import { shallowRef, triggerRef } from 'vue'
export default {
  setup() {
    const obj = {
      a: 1,
      first: {
        b: 2,
        second: {
          c: 3
        }
      }
    }

    const state = shallowRef(obj)

    const changeFirst = () => {
      state.value = {
        a: 5,
        first: {
          b: 6,
          second: {
            c: 7
          }
        }
      }
    }
    const changeSecond = () => {
      // 数据改变了，但视图没有更新
      state.value.a = 8
      state.value.first.b = 9
      state.value.first.second.c = 10
      // 修改值后立即驱动视图更新
      triggerRef(state)
      console.log(state)
    }

    return { state, changeFirst, changeSecond }
  }
}
</script>