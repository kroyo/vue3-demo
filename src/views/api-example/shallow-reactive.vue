<template>
  <div>a: {{ state.a }}</div>
  <div>b: {{ state.first.b }}</div>
  <div>c: {{ state.first.second.c }}</div>
  <button @click="changeFirst">改变第一级</button><br />
  <button @click="changeSecond">改变第二级</button>
</template>

<script>
import { shallowReactive } from 'vue'
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

    const state = shallowReactive(obj)

    const changeFirst = () => {
      state.a = 6
    }
    const changeSecond = () => {
      state.first.b = 7
      state.first.second.c = 8
      console.log(state)
    }

    return { state, changeFirst, changeSecond }
  }
}
</script>