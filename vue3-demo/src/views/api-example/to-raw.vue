<template>
  <div>{{ state.name }}</div>
  <div>{{ state.age }}</div>
  <div>obj === raw: {{ isEqual }}</div>
  <button @click="change">改变原始值</button>
</template>

<script>
// 获取 ref 或 reactive 对象的原始数据
import { reactive, toRaw } from 'vue'
export default {
  setup() {
    const obj = {
      name: '前端印象',
      age: 22
    }

    const state = reactive(obj)
    const raw = toRaw(state)
    let isEqual = obj === raw

    const change = () => {
      obj.age = 26
      console.log(state)
    }

    console.log(isEqual) // true

    return { state, isEqual, change }
  }
};
</script>
