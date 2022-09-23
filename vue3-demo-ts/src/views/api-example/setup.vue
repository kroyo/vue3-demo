<template>
  <p>{{ num }}</p>
  <button @click="add">增加</button>
</template>

<script lang="ts">
import { defineComponent, ref, toRef } from 'vue'
import type { Ref } from 'vue'

export default defineComponent({
  name: 'setup',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    // ref两种写法
    // let num = ref<number>(0)
    let num: Ref<number> = ref(0)

    const add = () => {
      num.value++
    }

    const title:Ref<string> = toRef(props, 'title')
    console.log(title.value)

    // Attribute (非响应式对象，等同于 $attrs)
    console.log(context.attrs)
    // 插槽 (非响应式对象，等同于 $slots)
    console.log(context.slots)
    // 触发事件 (方法，等同于 $emit)
    console.log(context.emit)
    // 暴露公共 property (函数)
    console.log(context.expose)

    return { num, add }
  }
})
</script>