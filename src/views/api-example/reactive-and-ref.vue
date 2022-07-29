<!--
 * @Description: reactive 方法是用来创建一个响应式的数据对象，该API也很好地解决了Vue2通过 defineProperty 实现数据响应式的缺陷
 * 我们使用了 ref 函数包装了一个响应式的数据对象
 * @Author: zhonglh
 * @LastEditor: zhonglh
 * @Date: 2022-07-29 14:23:13
 * @LastEditTime: 2022-07-29 14:25:36
-->
<template>
  <h3 class="mb20">reactive 和 ref</h3>
  <div class="mb32 tl">
    1. 基本类型值（String 、Nmuber 、Boolean 等）或单值对象（类似像 {count: 3} 这样只有一个属性值的对象）使用 ref
    <br />
    2. 引用类型值（Object 、Array）使用 reactive
  </div>
  <div>reactive: {{state1.count}}</div>
  <div>ref: {{state2.count}}</div>
</template>

<script>
// 基本类型值（String 、Nmuber 、Boolean 等）或单值对象（类似像 {count: 3} 这样只有一个属性值的对象）使用 ref
// 引用类型值（Object 、Array）使用 reactive
import { reactive, ref } from 'vue'
export default {
  name: 'reactiveAndRef',
  setup() {
    // 2. 创建响应式的数据对象
    const obj = {count: 3}
    const state1 = ref(obj)
    const state2 = reactive(obj)

    console.log(state1)
    console.log(state2)
    console.log(state1.count == state2.count.value)  // true

    // 3. 将响应式数据对象state return 出去，供template使用
    return { state1, state2 }
  }
}
</script>

<style>

</style>