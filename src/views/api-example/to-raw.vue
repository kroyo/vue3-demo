<template>
  <div>a: {{ state.a }}</div>
  <div>b: {{ state.first.b }}</div>
  <div>c: {{ state.first.second.c }}</div>
  <button @click="changeFirst">重新赋值</button><br />
  <button @click="changeSecond">直接修改数据</button>
</template>

<script>
import { reactive, toRaw } from 'vue'
export default {
  setup() {
    const obj = {
      name: '前端印象',
      age: 22
    }

    const state = reactive(obj)
    const raw = toRaw(state)

    console.log(obj === raw) // true
  }
};
</script>
