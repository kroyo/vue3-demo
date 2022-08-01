# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

### 1.setup

### 2.vue3生命周期
![生命周期比较](./docs/image/lieft-cycle.png)

### 3.reactive
<code>reactive</code> 方法是用来创建一个响应式的数据对象，该API也很好地解决了Vue2通过 defineProperty 实现数据响应式的缺陷

### 4.ref
基本类型值（String 、Nmuber 、Boolean 等）或单值对象（类似像 {count: 3} 这样只有一个属性值的对象）使用 <code>ref</code>  
引用类型值（Object 、Array）使用 <code>reactive</code>

### 5.toRef
1. <code>ref</code> 是对传入数据的拷贝；<code>toRef</code> 是对传入数据的引用
2. <code>ref</code> 的值改变会更新视图；<code>toRef</code> 的值改变不会更新视图

### 6.toRefs
- 将传入的对象里所有的属性的值都转化为响应式数据对象
- <code>toRefs</code> 只会为源对象中包含的 property 生成 ref。如果要为特定的 property 创建 ref，则应当使用 <code>toRef</code>

### 7.shallowReactive
- 浅层reactive，做性能优化
- 创建一个响应式代理，它跟踪其自身 property 的响应性，但不执行嵌套对象的深层响应式转换 (暴露原始值)。
- <code>shallowReactive</code> 监听了第一层属性的值，一旦发生改变，则更新视图

### 8.shallowRef
- 浅层ref，性能优化
- 修改数据，数据确实被改变了，但是视图并没随之更新
- 可以在改变数据后，调用<code>triggerRef</code>主动刷新视图更新

### 9.toRaw
- 获取 ref 或 reactive 对象的原始数据的


## 学习vue3资料
https://juejin.cn/post/6897030228867022856  
https://github.com/vincentzyc/vue3-demo

