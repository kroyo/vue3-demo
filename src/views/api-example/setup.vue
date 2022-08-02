<template>
  <p>{{ number }}</p>
  <button @click="add">增加</button>
</template>

<script>
import { ref, toRef } from 'vue'
export default {
  name: 'setup',
  setup(props, context) {
    // 用 ref 函数包装一个响应式变量 number
    let number = ref(0)

    const add = () => {
      // number是被ref函数包装过了的，其值保存在.value中
      number.value++
    }

    // 兼容props中没有title，也会创建title的响应式变量
    const title = toRef(props, 'title')
    console.log(title.value)

    // Attribute (非响应式对象，等同于 $attrs)
    console.log(context.attrs)
    // 插槽 (非响应式对象，等同于 $slots)
    console.log(context.slots)
    // 触发事件 (方法，等同于 $emit)
    console.log(context.emit)
    // 暴露公共 property (函数)
    console.log(context.expose)

    // 将 number 和 add 返回出去，供template中使用(steup中变量需要return出去，模板中才能使用)
    return { number, add }
  }
}
</script>

<style>

</style>