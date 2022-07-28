<template>
  <p>{{ number }}</p>
  <button @click="add">增加</button>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'setup',
  setup() {
    // 用 ref 函数包装一个响应式变量 number
    let number = ref(0)

    const add = () => {
      // number是被ref函数包装过了的，其值保存在.value中
      number.value++
    }

    // 将 number 和 add 返回出去，供template中使用(steup中变量需要return出去，模板中才能使用)
    return { number, add }
  }
}
</script>

<style>

</style>