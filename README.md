# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

### 1.setup
使用 setup 函数时，它将接收两个参数：
1. props
2. context


- props
响应式，不能使用ES6解构，它会消除 prop 的响应性

如果需要解构 prop，可以在 setup 函数中使用 toRefs 函数来完成此操作：
```javascript
import { toRefs } from 'vue'

setup(props) {
  const { title } = toRefs(props)
  console.log(title.value)
}
```

如果 title 是可选的 prop，则传入的 props 中可能没有 title 。在这种情况下，toRefs 将不会为 title 创建一个 ref 。你需要使用 toRef 替代它：
```javascript
import { toRef } from 'vue'
setup(props) {
  const title = toRef(props, 'title')
  console.log(title.value)
}
```

- context
```javascript
// MyBook.vue
export default {
  setup(props, context) {
    // Attribute (非响应式对象，等同于 $attrs)
    console.log(context.attrs)

    // 插槽 (非响应式对象，等同于 $slots)
    console.log(context.slots)

    // 触发事件 (方法，等同于 $emit)
    console.log(context.emit)

    // 暴露公共 property (函数)
    console.log(context.expose)
  }
}
```


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
- 修改原始值，视图不会自动更新

### 10.markRaw
- 将原始数据标记为非响应式的, 
- 即使用 ref 或 reactive 将其包装，仍无法实现数据响应式，其接收一个参数，即原始数据，并返回被标记后的数据


### 11.provide && inject
与Vue2中的 provide 和 inject 作用相同
- provide ：向子组件以及子孙组件传递数据。接收两个参数，第一个参数是 key，即数据的名称；第二个参数为 value，即数据的值
- inject ：接收父组件或祖先组件传递过来的数据。接收一个参数 key，即父组件或祖先组件传递的数据名称

### 12.watch && watchEffect
watch( source, cb, [options] )  
参数说明：
- source：可以是表达式或函数，用于指定监听的依赖对象
- cb：依赖对象变化后执行的回调函数
- options：可参数，可以配置的属性有 immediate（立即触发回调函数）、deep（深度监听）

**注意**：watch方法会返回一个stop方法，若想要停止监听，便可直接执行该stop函数

watchEffect
1. 不需要手动传入依赖
2. 每次初始化时会执行一次回调函数来自动获取依赖
3. 无法获取到原值，只能得到变化后的值

### 13.getCurrentInstance
<code>getCurrentInstance</code> 支持访问内部组件实例。
> <code>getCurrentInstance</code> 只暴露给高阶使用场景，典型的比如在库中。  
> 强烈反对在应用的代码中使用 <code>getCurrentInstance</code> 。请**不要**把它当作在组合式 API 中获取 this 的替代方案来使用。

### 14.获取标签元素
1. 先给目标元素的 <code>ref</code> 属性设置一个值，假设为 el
2. 然后在 <code>setup</code> 函数中调用 <code>ref</code> 函数，值为 null，并赋值给变量 el，这里要注意，该变量名必须与我们给元素设置的 <code>ref</code> 属性名相同
3. 把对元素的引用变量 el 返回（return）出去

### 15.


## 学习vue3资料
https://juejin.cn/post/6897030228867022856  
https://github.com/vincentzyc/vue3-demo

