<template>
  <div>watch ref: {{state}}</div>
  <div>watch reactive: {{state2}}</div>
  <div>watch reactive 多个值: {{state3}}</div>
  <div>watch watchEffect: {{state4}}</div>
</template>

<script>
import { ref, reactive, watch, watchEffect } from 'vue'
export default {
  setup() {
    // 监听ref类型
    const state = ref(0)

    watch(state, (oldValue, newValue) => {
      console.log(`原值为${oldValue}`)
      console.log(`新值为${newValue}`)
    })

    // 1秒后将state值+1
    setTimeout(() => {
      state.value++
    }, 1000)


    // 监听reactive
    const state2 = reactive({ count: 0 })

    watch(() => state2.count, (newValue, oldValue) => {
      console.log(`原值为${oldValue}`)
      console.log(`新值为${newValue}`)
      /* 1秒后打印结果：
                      原值为0
                      新值为1
      */
    })
    // 1秒后将state.count的值+1
    setTimeout(() => {
      state2.count++
    }, 1000)


    // 监听多个值
    const state3 = reactive({ count: 0, name: 'zs' })

    watch(
      [() => state3.count, () => state3.name],
      ([newCount, newName], [oldCount, oldName]) => {
        console.log(oldCount) // 旧的 count 值
        console.log(newCount) // 新的 count 值
        console.log(oldName) // 旧的 name 值
        console.log(newName) // 新的 name 值
      }
    )

    setTimeout(() => {
      state3.count++
      state3.name = 'ls'
    }, 1000)

    // watchEffect
    const state4 = reactive({ count: 0, name: 'zs' })
    watchEffect(() => {
      console.log(state4.count)
      console.log(state4.name)
      /*  初始化时打印：
                      0
                      zs

          1秒后打印：
                      1
                      ls
      */
    })
    setTimeout(() => {
      state4.count++
      state4.name = 'ls'
    }, 1000)

    return { state, state2, state3, state4 }
  }
}
</script>